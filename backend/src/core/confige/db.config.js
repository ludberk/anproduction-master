import mongoose from "mongoose";
import { config } from "dotenv";

config();

 const ConnectionString = 'mongodb://localhost:27017/anproduct';
//const ConnectionString = process.env.ConnectionString;

export async function createDbConnection() {
    try {
        await mongoose.connect(ConnectionString);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error;
    }
}

