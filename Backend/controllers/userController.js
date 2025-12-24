import User from "../models/user_model.js"
import { connection } from "../models/db.js"

export const user = async (req, res) => {
    try {
      const users = await User.find().select("-password");
      console.log(users)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
};
