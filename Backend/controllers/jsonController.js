import fs from "node:fs/promises"
import path from "node:path"
import { cwd } from "node:process"
import Product from "../models/product_model.js"

export const quickaccessController = async (req, res) => {
    try {
        const absolutePath = path.join(cwd(), "data", "quickaccess_json", "access.json")
        const data = await fs.readFile(absolutePath, "utf-8")
        const jsonData = JSON.parse(data)
        res.status(200).json(jsonData)
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "Error interno del servidor"})
    }
}

export const offerProductsController = async (req, res) => {
    try {
        const absolutePath = path.join(cwd(), "data", "offers_json", "offers.json")
        const data = await fs.readFile(absolutePath, "utf-8")
        const jsonData = JSON.parse(data)
        res.status(200).json(jsonData)
    } catch (error) {
        console.log(error)
        res.send(500).json({message:"Error interno del servidor"})
    }
}

export const createProductController = async (req, res) => {
    try {
        const newProduct = new Product(req.body);

        await newProduct.save();
        res.status(201).json({ 
            message: "Producto creado exitosamente", 
            product: newProduct 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor al guardar" });
    }
}

export const getProductsController = async (req, res) => {
    try {
        const allProducts = await Product.find(); 
        
        res.status(200).json(allProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los productos" });
    }
};