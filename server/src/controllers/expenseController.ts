import { Request, Response } from "express";
import { Expense } from "../models/expense";
import { ObjectId } from "mongodb";

export class ExpenseController {

    async addExpense(req: Request, res: Response): Promise<void>{
        let { name, amount, date, type } = req.body;
        type = type || "Default expense";
        date = date || new Date()
            .toLocaleDateString()
            .split('.')
            .reverse()
            .join('-');

        const expense = await Expense.create({ name, amount, date, type });

        res.json(expense);
    }

    async getExpenses(req: Request, res: Response): Promise<void>{
        const { expensesId } = req.query;

        let ids: Array<ObjectId> = [];
        if (Array.isArray(expensesId)) {
            expensesId.map(id => {
                typeof id === 'string' ? ids.push(new ObjectId(id)): null
            })
        }
        
        const expenses = await Expense.find({ '_id': { $in: ids } });

        res.json(expenses);
    }

    async getOneExpense(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const expenseId = new ObjectId(id);

        const expense = await Expense.findById({ _id: expenseId });

        res.json(expense);
    }

    async changeExpense(req: Request, res: Response): Promise<void>{
    }

}