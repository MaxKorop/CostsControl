import { makeAutoObservable } from "mobx";
import { IExpense, IGroup } from "../interfaces";
import { Group, Expense } from "../classes";


export default class UserStore{
    private _groups: IGroup[]
    private _isAuth: boolean
    private _expenses: IExpense[]

    constructor() {
        this._isAuth = false;
        this._groups = [{
            id: "group0",
            name: "Group 1",
            expensesId: [
                "expense1",
                "expense2"
            ]
        }, {
            id: "group1",
            name: "Group 2",
            expensesId: [
                "expense3"
            ]
        }
        ];
        this._expenses = [
            {
                id: "expense1",
                name: "Expense 1",
                amount: 100,
                date: "2023-08-12",
                type: "expense"
            }, {
                id: "expense2",
                name: "Expense 2",
                amount: 120,
                date: "2023-08-13",
                type: "expense"
            }, {
                id: "expense3",
                name: "Expense 1",
                amount: 200,
                date: "2023-08-12",
                type: "expense"
            }, {
                id: "expense4",
                name: "Income 1",
                amount: 120,
                date: "2023-08-11",
                type: "income"
            }
        ];
        makeAutoObservable(this);
    }

    
    public get isAuth() : boolean {
        return this._isAuth;
    }
    

    public get groups() : IGroup[] {
        return this._groups;
    }

    public get expenses() : IExpense[] {
        return this._expenses;
    }

    public set isAuth(status : boolean) {
        this._isAuth = status;
    }

    public set groups(groups : IGroup[]) {
        this._groups = groups;
    }

    public set expenses(expenses : IExpense[]) {
        this._expenses = expenses;
    }

    public addNewGroup(groupName: string): void {
        const groupId: string = "group" + this._groups.length;
        const group = new Group(groupId, groupName);
        this._groups.push(group);
    }

    public addNewExpense(groupId: string, expenseName: string, expenseType: string, expenseAmount: number): void {
        const expenseId: string = "expense" + this._expenses.length;
        const expense = new Expense(expenseId, expenseName, expenseAmount, expenseType);
        const groupIndex = this._groups.findIndex((group) => group.id === groupId);
        this._expenses.push(expense);
        this._groups[groupIndex].expensesId.push(expenseId);
        console.log(expenseId, expense, groupIndex, this._expenses, this._groups);
    }
}