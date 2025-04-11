import express from "express";
import connectDB from "./src/config/db.js";
import {router} from "./src/routes/rutas.js";

const app=  express();
const PORT=12345;

connectDB();

app.use(express.json());
app.use(router);



app.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto http://localhost:${PORT}`)
})