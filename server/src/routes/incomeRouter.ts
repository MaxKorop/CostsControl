import { Router } from "express";
import { IncomeController } from "../controllers/incomeController";

const router = Router();
const incomeController = new IncomeController();

router.post('/', incomeController.addIncome);
router.put('/:id', incomeController.changeIncome);
router.get('/', incomeController.getIncomes);
router.get('/:id', incomeController.getOneIncome);

export default router;