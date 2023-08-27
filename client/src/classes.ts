import { IExpense, IGroup } from "./interfaces";

export class Group implements IGroup  {
    public _id: string;
    public name: string;
    public expenses: Array<string>;
    public __v: number;
    constructor(id: string, groupName: string, __v?: number) {
        this._id = id;
        this.name = groupName;
        this.expenses = [];
        this.__v = __v || 0;
    }
}

export class Expense implements IExpense {
    public _id: string;
    public name: string;
    public amount: number;
    public date: string;
    public type: string;
    public __v: number;
    constructor(id: string, name: string, amount: number, type: string, __v?: number) {
        this._id = id;
        this.name = name;
        this.amount = amount;
        this.type = type;
        this.date = new Date().toISOString().slice(0, 10);
        this.__v = __v || 0;
    }
}