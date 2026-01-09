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
import { productsController } from "../controllers/productsController.js";
import { propagandaController } from "../controllers/propagandaController.js"

const productsPath = path.join(process.cwd(), "data", "products_json", "products.json")
const router = Router()
/*-----------
-- P O S T --
-----------*/
router.post("/productsjson", async (req, res) => {
    const newProduct = req.body;
    console.log("Datos", newProduct)
    
    try {
        const data = await fs.readFile(productsPath, "utf-8");
        const products = JSON.parse(data);
        
        products.push(newProduct)
        await fs.writeFile(productsPath, JSON.stringify(products, null, 2));

        console.log("Producto guardado con exito")
        res.status(200).json({message:"Producto recibido"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error al intentar guardar el producto"})
    }
});
router.post("/register", register);
router.post("/login", login);

/*---------
-- G E T --
---------*/
router.get("/user", user);
router.get("/verify", verifyToken)
router.get("/productsjson", productsController)
router.get("/accessjson", quickaccessController)
router.get("/propagandajson", propagandaController)
router.get("/offersproductsjson", offerProductsController)

export default router;
