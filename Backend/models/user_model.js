import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    }, 
    phoneNumber:{
        type: Number,
        required: true,
        trim: true,
        unique: true,
    }, 
    username:{
        type: String,
        required: true,
        trim: true,
    }, 
    password:{
        type: String,
        required: true,
        trim: true,
    }
},{
    timestamps: true
})

export default mongoose.model("User", userShema)