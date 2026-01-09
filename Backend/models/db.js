import mongoose from "mongoose"

export const connection = async () => {
  const db = process.env.MONGO_URI || "mongodb://localhost:27017/mercadolibre_db";
  try {
    await mongoose.connect(db)
    console.log("db conectada")
  } catch (error) {
    console.log(error)
  }
  
}
