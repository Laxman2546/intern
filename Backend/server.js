import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import registrationRouter from "./Routes/registartionRouter.js";
import codeRouter from "./Routes/codeRouter.js";
import connectDb from "./Config/mongooseConnection.js";
connectDb();

const app = express();
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "https://internshala3.vercel.app",
];
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.get("/waking", (req, res) => {
  res.send("Waking backend server");
  return res.status(200).json({ success: "waking backend server" });
});
app.use("/", registrationRouter);
app.use("/code", codeRouter);
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
