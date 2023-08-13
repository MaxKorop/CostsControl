import { Router } from "express";
import { ExpenseController } from "../controllers/expenseController";

const router = Router();
const expenseController = new ExpenseController();

router.post('/', expenseController.addExpense);
router.put('/:id', expenseController.changeExpense);
router.get('/', expenseController.getExpenses);
router.get('/:id', expenseController.getOneExpense);

export default router;