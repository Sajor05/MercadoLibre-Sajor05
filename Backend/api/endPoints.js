import { Router } from "express";
import { user } from "../controllers/userController.js";
import { login } from "../controllers/loginController.js";
import { register } from "../controllers/registerController.js";
import { verifyToken } from "../controllers/tokenController.js";
import { quickaccessController } from "../controllers/jsonController.js"

const router = Router()

router.get("/user", user);
router.post("/register", register);
router.post("/login", login);
router.get("/verify", verifyToken)
router.get("/accessjson", quickaccessController)

export default router;
