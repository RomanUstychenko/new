import { Router, Request, Response } from 'express';


import { validate, authenticate } from '../../middlewares';
import { schemas } from '../../models/user';
import ctrlWrapper from '../../helpers/ctrlWrapper';
import { register, verify, login } from '../../controllers/auth';

const router = Router();

// router.post("/register", validate(schemas.registerSchema), ctrlWrapper(register));
// router.get("/verify/:verificationToken", ctrlWrapper(verify));
// router.post("/login", validate(schemas.loginSchema), ctrlWrapper(login));
router.post("/", authenticate);

export default router;