import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.error("Connection error", err));

    console.log("connected to db");
  } catch (e) {
    console.log("error occured while connecting to db", e);
  }
};

export default connectDb;
