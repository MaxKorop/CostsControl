import { Request, Response } from "express";
import { Group } from "../models/group";
import { Expense } from "../models/expense";
import { Income } from "../models/income";
import { ObjectId } from "mongodb";

export class GroupController {

    async addGroup(req: Request, res: Response): Promise<void>{
        let { name } = req.body;
        name = name || "Default Group"

        const group = await Group.create({ name });

        res.json(group);
    }

    async getGroups(req: Request, res: Response): Promise<void>{
        const { groupsId } = req.query;

        let ids: Array<ObjectId> = [];
        if (Array.isArray(groupsId)) {
            groupsId.map(id => {
                typeof id === 'string' ? ids.push(new ObjectId(id)): null
            })
        }
        
        const groups = await Group.find({ _id: { $in: ids } });

        res.json(groups);
    }

    async getOneGroup(req: Request, res: Response): Promise<void>{
        const groupId = req.params.id;

        const group = await Group.findById({ _id: groupId });

        let expenses, incomes;
        if (group) {
            expenses = await Expense.find({ _id: { $in: group.expenses } });
            incomes = await Income.find({ _id: { $in: group.incomes } });   
        }

        res.json({ expenses, incomes });
    }

    async changeGroup(req: Request, res: Response): Promise<void>{
    }

}