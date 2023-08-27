import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { Context } from "../..";
import { IAddExpense } from "../../interfaces";
import { addExpense } from "../../http/expensesAPI";

export const AddExpense: React.FC<IAddExpense> = ({ groupId, updateState, updateStateFunc }) => {
    const { user } = useContext(Context);

    const [isVisibleBlock, setIsVisibleBlock] = useState<boolean>(false);
    const [expenseName, setExpenseName] = useState<string>("");
    const [expenseType, setExpenseType] = useState<string>("");
    const [expenseAmount, setExpenseAmount] = useState<number>(0);

    const checkExpenseName = (): boolean => {
        const group = user.groups.find((group) => group._id === groupId);
        if (group) {
            return user.expenses.some((expense) => expense._id in group.expenses && expenseName === expense.name);            
        } else return user.expenses.some((expense) =>expenseName === expense.name);
    }
    const addExpenseAndClose = (): void => {
        addExpense(groupId, expenseName, expenseType, new Date().toISOString().slice(0, 10), expenseAmount)
            .then((result) => {
                const groupIndex = user.groups.findIndex(g => g._id === groupId);
                user.groups[groupIndex].expenses = result.expenses;
                user.expenses.push(result.expense);
                updateStateFunc(!updateState);
            });
        setIsVisibleBlock(!isVisibleBlock);
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center mt-2" style={{
            position: "relative"
        }}>
            <div className="mb-3" onClick={() => { setIsVisibleBlock(!isVisibleBlock) }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1V21" stroke="#0086A1" strokeLinecap="round" />
                    <path d="M21 11H1" stroke="#0086A1" strokeLinecap="round" />
                </svg>
            </div>
            {isVisibleBlock && <Container style={{ position: "absolute", top: "30px", height: "auto", width: "160px", zIndex: "999", backgroundColor: "#161b1caa" }} className="d-flex flex-column justify-content-center rounded-4 mt-4">
                <Form className="m-3">
                    <Form.Control placeholder="Type the name of expense here..." size="sm" onChange={(e) => setExpenseName(e.target.value)} className="mb-2" />
                    <Form.Control placeholder="Type the amount of expense here..." size="sm" onChange={(e) => setExpenseAmount(Number(e.target.value))} className="mb-2" />
                    <Form.Check type="radio" name="TypeRadio" value={"expense"} size={50} onChange={(e) => setExpenseType(e.target.value)} className="mb-2" label="Expense" />
                    <Form.Check type="radio" name="TypeRadio" value={"income"} size={50} onChange={(e) => setExpenseType(e.target.value)} className="mb-2" label="Income" />
                </Form>
                <Button
                    className="mb-3"
                    style={{ backgroundColor: "#0086A1", borderColor: "#0086A1" }}
                    onClick={() => { checkExpenseName() ? alert("The expense name should be unique") : addExpenseAndClose(); }}
                >
                    Add expense
                </Button>
        </Container>}
        </Container>
    )
}