import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://celedon22cuene:5OFxTfWlzejtWM0F@cluster0.0mms0r7.mongodb.net/prueba?retryWrites=true&w=majority&appName=Cluster0');
        console.log('conectado a la base de datos atlas')
       
    } catch(error){
        console.error('error al conectar a la base de datos', error)
        Process.exit(1);
    }
}

export default connectDB;