import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://anirudhpanwar35_db_user:g5sikkJzPjYWCQHs@cluster0.mkaczow.mongodb.net/Medicare")
    .then(() => {
        console.log("DB CONNECTED")
    })
}

