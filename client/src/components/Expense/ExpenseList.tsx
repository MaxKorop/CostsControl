import React from "react";
import { Container } from "react-bootstrap"
import { Expense } from "./Expense";
import { ExpenseListProps, IExpense } from "../../interfaces";

export const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {

    let list: Array<IExpense> = [...expenses]
        .sort((a, b): number => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        });

    return (
        <Container style={{height: "auto", flexBasis: "65%", flexShrink: 0}} className="mt-5">
            {list.map(item => {
                return <Expense key={item.id} item={item} />
            })}
        </Container>
    )
}