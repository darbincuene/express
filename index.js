import express from "express";
import connectDB from "./src/config/db.js";
import {router} from "./src/routes/rutas.js";
import dotenv from "dotenv";
import cors from "cors";

const app=  express();

const PORT=12345;

connectDB();

dotenv.config();
app.use('/uploads', express.static('uploads'));
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);



app.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto http://localhost:${PORT}`)
})