import mongoose from "mongoose";

const tareasshema= new mongoose.Schema({
    titulo:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
    },
    completada:{
        type:Boolean,
        default:false
    },
    fechaCreacion:{
        type:Date,
        default:Date.now,
    }
});

const Tareas= mongoose.model('Tareas', tareasshema);
export default Tareas;