import { Request, Response } from "express";
import { Group } from "../models/group";
import { Expense } from "../models/expense";
import { ObjectId } from "mongodb";

export class GroupController {

    async getGroups(req: Request, res: Response): Promise<void>{
        const { groupsId } = req.query;
        
        let ids: Array<ObjectId> = [];
        if (Array.isArray(groupsId)) {
            groupsId.map(id => {
                typeof id === 'string' ? ids.push(new ObjectId(id)): null
            })
        }
        
        const groups = await Group.find({ _id: { $in: ids } });
        res.json({ groups });
    }

    async addExpense(req: Request, res: Response): Promise<void>{
        const { groupId, expenseName, expenseType, expenseDate, expenseAmount } = req.body;

        let expense;
        if (typeof expenseName === 'string' && typeof expenseType === 'string' && typeof expenseDate === 'string' && typeof expenseAmount === 'number') {
            expense = await Expense.create({ name: expenseName, amount: expenseAmount, date: expenseDate, type: expenseType });
            const updated = await Group.updateOne({ _id: groupId }, { $push: { expenses: expense.id } });   
        }
        const group = await Group.findOne({ _id: groupId });
        const expenses = group?.expenses;

        res.json({ expense, expenses });
    }

    async changeGroup(req: Request, res: Response): Promise<void>{
    }

}