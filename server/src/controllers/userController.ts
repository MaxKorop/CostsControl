import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from "../models/user";
import { ApiError } from "../error/apiError";
import { IExpense } from "../models/expense";

const generateToken = (name: string, email: string, expenses: Array<IExpense>): any => {
    if (typeof process.env.JWT_SECRET_KEY === 'string') {
        return jwt.sign(
            { name, email, expenses }, 
            process.env.JWT_SECRET_KEY,
            { expiresIn: '24h' }
        );
    }
}

export class UserController {

    async registration(req: Request, res: Response, next: NextFunction): Promise<any>{
        let { name, email, password, moneyAmount } = req.body;
        moneyAmount = moneyAmount || 0
        if (!email || !password) {
            return next(ApiError.badRequest("Incorrect email or password"));
        }
        const candidate = await User.find({ email });
        if (candidate.length >= 1) {
            return next(ApiError.badRequest("User with this email already exists"));
        }
        const hashPassword = await bcrypt.hash(password, 3);
        let user = await User.create({ name, email, password: hashPassword, moneyAmount });
        const token = generateToken(user.name, user.email, user.expenses);
        res.json({ token });
    }

    async login(req: Request, res: Response, next: NextFunction): Promise<any>{
        const { email, password } = req.body;
        let user = await User.findOne({email});
        if (!user) {
            return next(ApiError.internal("User not found"));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal("Incorrect password"));
        }
        const token = generateToken(user.name, user.email, user.expenses);
        res.json({ token });
    }

    async check(req: Request, res: Response, next: NextFunction): Promise<void>{
        const user = req.user;
        let token;
        if (typeof user.name === 'string' && typeof user.email === 'string' ) {
            token = generateToken(user.name, user.email, user.expenses);   
        }
        res.json({ token });
    }

    async addExpense(req: Request, res: Response, next: NextFunction): Promise<any>{
        const { name, email } = req.user;
        const { amount, date, category, expenseType, note } = req.body;
        const newExpense: IExpense = { amount, date, category, expenseType, note };
        if (!amount || !date || !category || !expenseType)
            return next(ApiError.badRequest("Incorrect data"));
        let user = await User.findOneAndUpdate({ name, email }, { $push: { expenses: newExpense } });  
        user = await User.findOne({ name, email });
        const token = generateToken(user?.name, user?.email, user?.expenses);
        res.json({ token });
    }
}