import { IExpense, IGroup } from "./interfaces";

export class Group implements IGroup  {
    public id: string;
    public name: string;
    public expensesId: Array<string>;
    constructor(id: string, groupName: string) {
        this.id = id;
        this.name = groupName;
        this.expensesId = []
    }
}

export class Expense implements IExpense {
    public id: string;
    public name: string;
    public amount: number;
    public date: string;
    public type: string;
    constructor(id: string, name: string, amount: number, type: string) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.type = type;
        this.date = new Date().toISOString().slice(0, 10)
    }
}