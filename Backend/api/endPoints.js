import { Router } from "express";
import { user } from "../controllers/userController.js";
import { login } from "../controllers/loginController.js";
import { register } from "../controllers/registerController.js";
import { verifyToken } from "../controllers/tokenController.js";
import { quickaccessController } from "../controllers/jsonController.js"
import { propagandaController } from "../controllers/propagandaController.js"
import { productsController } from "../controllers/productsController.js";

const router = Router()
/*-----------
-- P O S T --
-----------*/
router.post("/register", register);
router.post("/login", login);

/*---------
-- G E T --
---------*/
router.get("/user", user);
router.get("/verify", verifyToken)
router.get("/accessjson", quickaccessController)
router.get("/propagandajson", propagandaController)
router.get("/productsjson", productsController)

export default router;
