import { Router } from "express";
import { GroupController } from "../controllers/groupController";
import { auth } from "../middleware/authMiddleWare";

const groupController = new GroupController();
const router = Router();

router.get('/', auth, groupController.getGroups);
router.put('/:id', auth, groupController.changeGroup);
router.put('/', auth, groupController.addExpense);

export default router;