import { Router } from "express";
import { ExpenseController } from "../controllers/expenseController";

const router = Router();
const expenseController = new ExpenseController();

router.put('/:id', expenseController.changeExpense);
router.get('/', expenseController.getExpenses);

export default router;