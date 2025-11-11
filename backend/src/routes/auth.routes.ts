import { Router } from "express";
import { signup, login, user } from "../controllers/auth.controller";
import { authGuard } from "../middlewares/auth.middleware";

const router = Router();

router.post("/signup", signup)
router.post("/login", login)
router.get("/user", authGuard, user)

export default router;