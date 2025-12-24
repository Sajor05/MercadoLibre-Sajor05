import User from "../models/user_model.js"
import { createAccessToken } from "../middleware/jwt.js";
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
    const {email, phoneNumber, username, password} = req.body;
    try {
        const userFound = await User.findOne({email})
        if (userFound) return res.status(400).json({message:"Ya existe una cuenta con este e-mail"})
        
            //Hasheamos la contraseña
        const hashPassword = await bcrypt.hash(password, 10);
        
        //Inicializamos el nuevo usuario
        const newUser = new User({
            email,
            phoneNumber,
            username,
            password : hashPassword,
        });
        //Guardamos el nuevo usuario
        const userSaved = await newUser.save()
        const token = await createAccessToken({id: userSaved._id})
        res.cookie("token", token, {
            httpOnly: false,
            secure: false, 
            sameSite: 'lax',
        });
        /*-----------------------------------
        --  Vemos el resultado por consola --
        -----------------------------------*/

        //Backend
        console.log({
            id: userSaved._id,
            phoneNumber: userSaved.phoneNumber,
            username: userSaved.username,
            email: userSaved.email
        })

        //Frontend
        res.json({
            id: userSaved._id,
            phoneNumber: userSaved.phoneNumber,
            username: userSaved.username,
            email: userSaved.email
        })
    }catch(error) {
        console.log(error)
        res.status(500).json({ message: "error, intentelo mas tarde." });
    }

    
}