import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from "../models/user";
import { ApiError } from "../error/apiError";
import { ObjectId } from "mongodb";
import { Group } from "../models/group";

const generateToken = (name: string, email: string, groups: Array<ObjectId>): any => {
    if (typeof process.env.JWT_SECRET_KEY === 'string') {
        return jwt.sign(
            { name, email, groups }, 
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
        if (typeof candidate === 'undefined') {
            return next(ApiError.badRequest("User with this email already exists"));
        }
        const hashPassword = await bcrypt.hash(password, 3);
        let user = await User.create({ name, email, password: hashPassword, moneyAmount });
        const token = generateToken(user.name, user.email, user.groups);
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
        const token = generateToken(user.name, user.email, user.groups);
        res.json({ token });
    }

    async check(req: Request, res: Response, next: NextFunction): Promise<void>{
        const user = req.query.user as any;
        let token;
        if (typeof user.name === 'string' && typeof user.email === 'string' ) {
            token = generateToken(user.name, user.email, user.groups);   
        }
        res.json({ token });
    }

    async addGroup(req: Request, res: Response): Promise<void>{
        let { user } = req.query as any;
        const { groupId } = req.body;

        const { name, email } = user;
        let group;
        if (typeof groupId === 'string') {
            group = new ObjectId(groupId);
            user = await User.findOneAndUpdate({ name, email }, { $push: { groups: group } });   
        }
        user = await User.findOne({ name, email });
        const groups = user.groups;

        res.json({ user });
    }

}