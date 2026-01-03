import fs from "node:fs/promises"
import path from "node:path"
import { cwd } from "node:process"

export const productsController = async (req, res) => {
    try {
        const absolutePath = path.join(cwd(), "data", "products_json", "products.json")
        const data = await fs.readFile(absolutePath, "utf-8")
        const jsonData = JSON.parse(data)
        res.status(200).json(jsonData)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error interno del servidor"})
    }
}