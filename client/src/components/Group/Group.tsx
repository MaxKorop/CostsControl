import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { ExpenseList } from "../Expense/ExpenseList";
import { IExpense, GroupProps } from "../../interfaces";
import { Context } from "../../index";
import { AddExpense } from "../addingComponents/AddExpense";



export const Group: React.FC<GroupProps> = ({ group }) => {

    const { user } = useContext(Context);
    const { expensesId } = group;
    const expenses: Array<IExpense> = [];
    user.expenses.map((expense) => {
        if (expensesId.includes(expense.id)) {
            expenses.push(expense);
            return expense
        } else return null
    });

    const [rolledOut, setRolledOut] = useState<boolean>(false);

    if (rolledOut) {
        return (
            <Container
                className="d-flex justify-content-between align-items-start mt-3 rounded-4 pt-2 pb-2"
                style={{
                    backgroundColor: "#2C3639",
                    color: "white"
                }}
            >

                <p
                    style={{marginLeft: "3%", marginTop: "1%", marginRight: "2%", flexBasis: "12%", flexShrink: 0}}
                >{group.name}</p>

                <ExpenseList expenses={expenses} />
                <div className="d-flex justify-content-between align-items-center">
                    <AddExpense groupId={group.id} />
                    <svg onClick={() => {setRolledOut(!rolledOut)}} style={{marginLeft: "1%", marginRight: "2%"}} width="48" height="33" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.5761 2.01734L46.4756 28.7687C47.5014 30.0818 46.5658 32 44.8995 32L3.10049 32C1.4342 32 0.4986 30.0818 1.52445 28.7687L22.424 2.01734C23.2247 0.992392 24.7753 0.992392 25.5761 2.01734Z" fill="#0086A1" stroke="#0086A1"/>
                    </svg>
                </div>

            </Container>
        )
    } else {
        return (
            <Container
                className="d-flex justify-content-between align-items-center mt-3 rounded-4 pt-2 pb-2 position-relative"
                style={{
                    backgroundColor: "#2C3639",
                    color: "white"
                }}
            >
                <p
                    style={{marginLeft: "7%", marginTop: "1%", flexBasis: "12%", flexShrink: 0}}
                >{group.name}</p>
                
                <div className="d-flex justify-content-between align-items-center">
                    <AddExpense groupId={group.id} />
                    <svg onClick={() => {setRolledOut(!rolledOut)}} style={{marginRight: "2%"}} width="48" height="33" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4239 30.9827L1.52444 4.23129C0.498595 2.9182 1.43419 1 3.10049 1H44.8995C46.5658 1 47.5014 2.9182 46.4756 4.23129L25.576 30.9827C24.7753 32.0076 23.2247 32.0076 22.4239 30.9827Z" fill="#0086A1" stroke="#0086A1"/>
                    </svg>
                </div>

            </Container>
        )
    }
};