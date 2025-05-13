import mongoose from "mongoose";

const productoShema= new mongoose.Schema({
    nombre_producto:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    imagen_url:{
        type:String,
        require:true,

    },

    precio:{
        type:Number,
        require:true
    }
})

export default mongoose.model('producto',productoShema);
