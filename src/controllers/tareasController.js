import Tarea from "../models/tareasModels.js";

export const crearTarea = async (req, res) => {
  try {
    const { titulo, descripcion, completada } = req.body;
    const nuevaTarea = new Tarea({ titulo, descripcion, completada });
    await nuevaTarea.save();
    res.status(201).json({ message: "Tarea creada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "error al crear la tarea", error });
  }
};

export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ message: "error al obtener las tareas", error });
  }
};

export const actualizarTarea = async (req, res) => {
  try {
    const id = req.params.id;
    const { titulo, descripcion, completada } = req.body;

    const tareaActualizada = await Tarea.findByIdAndUpdate(id, {
      titulo,
      descripcion,
      completada,
    });

    if (!tareaActualizada) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json({ message: "Tarea actualizada correctamente", tareaActualizada });
  } catch (error) {
    console.error("error al actualizar la tarea", error);
    res.status(500).json({ message: "error al actualizar la tarea", error });
  }
};

export const eliminarTarea = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const tareaEliminada = await Tarea.findByIdAndDelete(id);
    if (!tareaEliminada) {
      return res
        .status(404)
        .json({ message: "no se encontro una tarea con ese id" });
    }
    console.log(tareaEliminada);
    res.json({ message: "tarea eliminada correctamente", tareaEliminada });
  } catch (error) {
    console.log(error);
  }
};

export const obtenerTareaPorId = async (req,res) => {
    const id=req.params.id;
    // console.log(id);
    try{
        const tarea=await Tarea.findById(id);
        if(!tarea){
            return res.status(404).json({message:"no se encontro una tarea con ese id"});
        }
        res.json({message:"tarea encontrada",tarea});
        // console.log(tarea);

    } catch(error){
        console.log("error al obtener la tarea",error);
    }


}
