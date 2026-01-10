import path from "path";
import { Router } from "express";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { user } from "../controllers/userController.js";
import { login } from "../controllers/loginController.js";
import { register } from "../controllers/registerController.js";
import { verifyToken } from "../controllers/tokenController.js";
import { quickaccessController } from "../controllers/jsonController.js"
import {offerProductsController} from "../controllers/jsonController.js"
import { getProductsController } from "../controllers/loginController.js";
import { createProductController } from "../controllers/jsonController.js";
import { propagandaController } from "../controllers/propagandaController.js"

const router = Router()
/*-----------
-- P O S T --
-----------*/
router.post("/productsjson", createProductController);
router.post("/register", register);
router.post("/login", login);

/*---------
-- G E T --
---------*/
router.get("/user", user);
router.get("/verify", verifyToken)
router.get("/productsjson", getProductsController)
router.get("/accessjson", quickaccessController)
router.get("/propagandajson", propagandaController)
router.get("/offersproductsjson", offerProductsController)

export default router;
