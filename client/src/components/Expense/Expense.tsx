import React from "react";
import { Container } from "react-bootstrap";
import { ExpenseProps } from "../../interfaces";

export const Expense: React.FC<ExpenseProps> = ({ item }) => {
    return (
        <Container
            className="d-flex flex-row flex-wrap justify-content-between align-items-center rounded-3 mt-4 mb-4 pt-3"
            style={{backgroundColor: "#3F4E4F"}}
        >
            <p>{ item.name }</p>
            <p>{ item.date }</p>
            <p>{ item.type }</p>
            <p>{ item.amount }</p>
        </Container>
    )
}