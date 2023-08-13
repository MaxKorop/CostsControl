import { Router } from "express";
import userRouter from './userRouter';
import expenseRouter from './expenseRouter';
import incomeRouter from './incomeRouter';
import groupRouter from './groupRouter';
const router = Router();

router.use('/user', userRouter);
router.use('/group', groupRouter);
router.use('/expense', expenseRouter);
router.use('/income', incomeRouter);

export default router;