import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.model.js';
import dotenv from 'dotenv';
import { json } from 'express';

export const vericarToken= async(req, res, next)=>{

    const token =req.header('Authorization')?.replace('Bearer ', '');
    if (!token){
     return res.status(401).json({message:"Token no proporcionado"})
    }

    try{
        const verificartoken= jwt.verify(token,'miclavesecreta123');
        const usuario =await Usuario.findById(verificartoken.id);
        if(!usuario){
            return res.status(404).json({message:"usuario no encontrado"})
        }
        req.usuario=usuario;
        next();

    } catch(error){
        return res.status(401).json({message:"Token no valido"})

    }

}

export const soloAdmin=async(req, res,next)=>{
    if(req.usuario.rol !=='admin'){
        return res.status(403).json({message:"acceso denegado"})
    }
    next();
}