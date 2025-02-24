import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://muhammedafthal:111000@cluster0.qjqij.mongodb.net/food-del').then(() => console.log("DB Connected"))
}