import  ModeloUsuario  from '../models/Usuario.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registrarUsuario = async (req, res) => {
    const { nombre, email, password, rol } = req.body;

    try {
        const existeUsuario = await ModeloUsuario.findOne({ email });

        if (existeUsuario) {
            return res.status(400).json({ messaje: 'ya hay un correo con ese email' })
        }

            const nuevoUsuario = new ModeloUsuario({ nombre, email, password, rol });
            await nuevoUsuario.save();
            res.status(201).json({ messaje: 'Usuario creado correctamente', nuevoUsuario })


        
    } catch (error) {
        console.log(error)
        res.status(500).json({ messaje: 'error al registrar el usuario', error })
    }

}

export const Login=async(req,res)=>{
    const {email,password}=req.body;
    // console.log(email)
    // console.log(password)
    try{

        const usuario=await ModeloUsuario.findOne({email});
        // console.log(usuario)
        if(!usuario){
            return res.status(400).json({messaje:'email no existe'})
        }
       
        const esValido=await bcrypt.compare(password,usuario.password);
        // console.log(esValido);
        if(!esValido){
            return res.status(400).json({messaje:'contraseña incorrecta'})
        }
        const token=jwt.sign({id:usuario._id,rol:usuario.rol},process.env.JWT_SECRET,{
            expiresIn:'1d',
        })
        res.json({messaje:'inicio de sesion correcto',token,usuario})
    
    } catch(error){
        console.log(error)
        res.status(500).json({messaje:'error al iniciar sesion',error})
    }
    
}