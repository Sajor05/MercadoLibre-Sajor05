import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    id: { type: Number, unique: true }, // O deja que Mongo use su _id
    title: String,
    price: Number,
    stockCount: Number,
    description: String,
    images: [String], // Array de strings para las URLs
    details: [String],
    isOffer: Boolean,
    offer: Number,
    cuotes: Number,
    seller: {
        name: String,
        logo: String,
        sellCount: Number,
        billType: String,
        mlSeller: {
            isMLSeller: Boolean,
            followersCount: Number,
            productsCount: Number
        }
    },
    category: {
        principalCategory: String,
        subCategory: String
    }
});

export const Product = mongoose.model("Product", productSchema);