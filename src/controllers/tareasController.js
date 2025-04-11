import Tarea from "../models/tareasModels.js";

export const crearTarea=async(req,res)=>{
    try{
        const {titulo, descripcion,estado}= req.body;
        const nuevaTarea= new Tarea({titulo,descripcion,estado});
        await nuevaTarea.save();
        res.status(201).json({message:'Tarea creada correctamente'});
    } catch(error){
        res.status(500).json({message:"error al crear la tarea",error})
    }
}

export const obtenerTareas=async(req,res)=>{
    try{
        const tareas=await Tarea.find();
        res.json(tareas);
    } catch (error){
        res.status(500).json({message:"error al obtener las tareas",error})
    }
}