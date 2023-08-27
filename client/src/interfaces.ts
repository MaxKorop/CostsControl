import { HTMLProps } from "react"
import { ButtonProps } from "react-bootstrap"

export interface IGroup {
    _id: string,
    name: string,
    expenses: Array<string>,
    __v: number
}

export interface IExpense {
    _id: string,
    name: string,
    amount: number,
    date: string,
    type: string,
    __v: number
}

export interface ExpenseProps {
    item: IExpense
}

export interface ExpenseListProps {
    expenses: IExpense[]
}

export interface GroupProps {
    group: IGroup
}

export interface GroupListProps {
    groups: IGroup[]
}

export interface IAddExpense extends HTMLProps<ButtonProps> {
    groupId: string,
    updateState: boolean,
    updateStateFunc: Function
}

export interface IUser {
    name?: string,
    email?: string,
    groups?: string[],
}