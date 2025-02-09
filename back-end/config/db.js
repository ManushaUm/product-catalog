import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...", process.env.MONGO_URI);
    const conect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
