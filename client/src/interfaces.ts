import { HTMLProps } from "react"
import { ButtonProps } from "react-bootstrap"

export interface IGroup {
    id: string,
    name: string,
    expensesId: Array<string>
}

export interface IExpense {
    id: string,
    name: string,
    amount: number,
    date: string,
    type: string
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
    groupId: string
}