import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import {connectDB} from './lib/db.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT;

// let you extract json data out of body
app.use(express.json())

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log('server is running on PORT: ' + PORT);
    connectDB();
});

