import express from "express";
import{crearTarea,obtenerTareas,actualizarTarea,eliminarTarea,obtenerTareaPorId} from '../controllers/tareasController.js'

const router= express.Router();

router.get('/tareas',obtenerTareas);
router.get('/tareas/:id',obtenerTareaPorId);
router.post('/tareas',crearTarea);
router.patch('/tareas/:id',actualizarTarea);
router.delete('/tareas/:id',eliminarTarea);


export {router}