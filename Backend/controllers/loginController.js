import bcrypt from "bcryptjs";
import User from "../models/user_model.js"
import { createAccessToken } from "../middleware/jwt.js";

export const login = async (req, res) => {
  const {email, password} = req.body;
  try {

    const userFound = await User.findOne({email});
    if (!userFound) return res.status(400).json({message:"Revisá el dato o ingresá el teléfono asociado a tu cuenta."})
    
    const matches = await bcrypt.compare(password, userFound.password)
    if (!matches) return res.status(400).json({message:"Revisá tu contraseña."})
    
    const token = await createAccessToken({id:userFound._id})
    res.cookie("token",token,{
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        });
    res.json({
      id:userFound._id,
      email:userFound.email,
      phoneNumber:userFound.phoneNumber,
      username:userFound.username,
    })
    } catch (error) {
        res.status(500).json({message:error.message});
  }
}