import { Request, Response } from "express";
import { Expense } from "../models/expense";
import { ObjectId } from "mongodb";

export class ExpenseController {

    async getExpenses(req: Request, res: Response): Promise<void>{
        const { expensesId } = req.query;

        let ids: Array<ObjectId> = [];
        if (Array.isArray(expensesId)) {
            expensesId.map(id => {
                typeof id === 'string' ? ids.push(new ObjectId(id)): null
            })
        }
        
        const expenses = await Expense.find({ '_id': { $in: ids } });

        res.json({ expenses });
    }

    async changeExpense(req: Request, res: Response): Promise<void>{
    }

}