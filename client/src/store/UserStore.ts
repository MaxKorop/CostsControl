import { makeAutoObservable } from "mobx";
import { IExpense, IGroup, IUser } from "../interfaces";
import { Group, Expense } from "../classes";


export default class UserStore{
    private _groups: IGroup[]
    private _isAuth: boolean
    private _user: IUser
    private _expenses: IExpense[]

    constructor() {
        this._user = {};
        this._isAuth = false;
        this._groups = [];
        this._expenses = [];
        makeAutoObservable(this);
    }
    
    public get isAuth(): boolean {
        return this._isAuth;
    }

    public get user(): IUser {
        return this._user;
    }
    
    public get groups(): IGroup[] {
        return this._groups;
    }

    public get expenses(): IExpense[] {
        return this._expenses;
    }

    public set isAuth(status: boolean) {
        this._isAuth = status;
    }

    public set user(user: IUser) {
        this._user = user;
    }

    public set groups(groups: IGroup[]) {
        this._groups = groups;
    }

    public set expenses(expenses: IExpense[]) {
        this._expenses = expenses;
    }
    
}