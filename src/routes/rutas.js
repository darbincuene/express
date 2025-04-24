import express from "express";
import{crearTarea,obtenerTareas,actualizarTarea,eliminarTarea,obtenerTareaPorId} from '../controllers/tareasController.js'
import {registrarUsuario,Login} from '../controllers/Auth.controller.js';


const router= express.Router();

router.get('/tareas',obtenerTareas);
router.get('/tareas/:id',obtenerTareaPorId);
router.post('/tareas',crearTarea);
router.patch('/tareas/:id',actualizarTarea);
router.delete('/tareas/:id',eliminarTarea);


// registro y login 
router.post("/registro",registrarUsuario)
router.post("/login",Login)
export {router}