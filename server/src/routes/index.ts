import { Router } from "express";
import userRouter from './userRouter';
import expenseRouter from './expenseRouter';
import groupRouter from './groupRouter';
const router = Router();

router.use('/user', userRouter);
router.use('/group', groupRouter);
router.use('/expense', expenseRouter);

export default router;