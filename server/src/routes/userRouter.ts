import { Router } from "express";
import { UserController } from "../controllers/userController";
import { auth } from '../middleware/authMiddleWare';

const router = Router();
const userController = new UserController();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', auth, userController.check);
router.put('/add_group', auth, userController.addGroup);

export default router;