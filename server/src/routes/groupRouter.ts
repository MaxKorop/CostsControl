import { Router } from "express";
import { GroupController } from "../controllers/groupController";
import { auth } from "../middleware/authMiddleWare";

const groupController = new GroupController();
const router = Router();

router.post('/', auth, groupController.addGroup);
router.put('/:id', auth, groupController.changeGroup);
router.get('/', auth, groupController.getGroups);
router.get('/:id', auth, groupController.getOneGroup);

export default router;