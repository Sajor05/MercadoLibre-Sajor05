import mongoose from "mongoose"

export const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost/merndb")
    console.log("db conectada")
  } catch (error) {
    console.log(error)
  }
  
}
