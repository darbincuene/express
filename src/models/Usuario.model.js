import mongoose from 'mongoose';
import db from '../config/db.js'

import bcrypt from 'bcryptjs';

const UsuarioShema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true},
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
         required:true
        },
    rol:{
        type:String,
        required:true,
        enum:['admin','user'],
        default:'user'
    },
    estado:{
        type:String,
        required:true,
        trim:true,
        default:'true'
    }

})

UsuarioShema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password=await bcrypt.hash(this.password,8);
    next();
})

export default mongoose.model('Usuario',UsuarioShema);