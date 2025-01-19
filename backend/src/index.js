import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import {connectDB} from './lib/db.js';
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
const PORT = process.env.PORT;

// let you extract json data out of body
app.use(express.json())

app.use(cookieParser());

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log('server is running on PORT: ' + PORT);
    connectDB();
});

