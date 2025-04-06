import {configDotenv } from "dotenv";
configDotenv();

// Dependencies
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./utils/connection.js"; 

// Routers
import userRouter from "./router/user.js";

const app = express();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/user", userRouter);

