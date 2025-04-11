import express from "express";
import{crearTarea,obtenerTareas} from '../controllers/tareasController.js'

const router= express.Router();

router.post('/tareas',crearTarea);
router.get('/tareas',obtenerTareas);

export {router}