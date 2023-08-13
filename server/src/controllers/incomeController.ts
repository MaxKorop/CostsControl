import { Request, Response } from "express";
import { Income } from "../models/income";
import { ObjectId } from "mongodb";

export class IncomeController {

    async addIncome(req: Request, res: Response): Promise<void>{
        let { name, price, date, type } = req.body;
        type = type || "Default expense";
        date = date || new Date()
            .toLocaleDateString()
            .split('.')
            .reverse()
            .join('-');

        const income = await Income.create({ name, price, date, type });

        res.json(income);
    }

    async getIncomes(req: Request, res: Response): Promise<void>{
        const { incomesId } = req.query;

        let ids: Array<ObjectId> = [];
        if (Array.isArray(incomesId)) {
            incomesId.map(id => {
                typeof id === 'string' ? ids.push(new ObjectId(id)): null
            })
        }
        
        const incomes = await Income.find({ '_id': { $in: ids } });

        res.json(incomes);
    }

    async getOneIncome(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const incomeId = new ObjectId(id);

        const income = await Income.findById({ _id: incomeId });

        res.json(income);
    }

    async changeIncome(req: Request, res: Response): Promise<void>{
    }

}