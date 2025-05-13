import express from "express";
import{crearTarea,obtenerTareas,actualizarTarea,eliminarTarea,obtenerTareaPorId} from '../controllers/tareasController.js'
import { crearProducto, obtenerProductos,eliminarProducto, actualizarProducto } from "../controllers/productos.controller.js";
import {registrarUsuario,Login} from '../controllers/Auth.controller.js';
import { vericarToken,soloAdmin } from "../middlewares/auth.js";
import { upload } from "../middlewares/confg.multer.js";

const router= express.Router();

router.get('/tareas',obtenerTareas);
router.get('/tareas/:id',obtenerTareaPorId);
router.post('/tareas',crearTarea);
router.patch('/tareas/:id',actualizarTarea);
router.delete('/tareas/:id',eliminarTarea);


// registro y login 
router.post("/registro",registrarUsuario)
router.post("/login",Login)
// productos
router.post('/productos',vericarToken,soloAdmin,upload.single('image'),crearProducto);
router.get('/productos',obtenerProductos)
router.delete('/productos/:_id', eliminarProducto);
router.patch('/productos/:_id', upload.single('image'), actualizarProducto);

export {router}