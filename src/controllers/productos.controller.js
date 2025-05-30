import express from 'express';
import ProductosShema from '../models/productos.Models.js';
import { upload } from '../middlewares/confg.multer.js';

export const crearProducto = async (req, res) => {
    try {
        const { nombre_producto, descripcion, precio } = req.body;
        // console.log(req.body)
        const imagen_url = `/uploads/${req.file.filename}`;
        // console.log("archivo subidi", req.file)

        const productoNuevo = new ProductosShema({
            nombre_producto,
            descripcion,
            precio: Number(precio),
            imagen_url
        })
        await productoNuevo.save();
        res.status(201).json({ message: "producto creado correctamnete" });

    } catch (error) {
        res.status(500).json({ message: "error al crear el producto", error });
        // console.log(error)
    }
}

export const obtenerProductos = async (req, res) => {
    try {
        const productos = await ProductosShema.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: "error al obtener los productos", error })
    }
}

export const eliminarProducto = async (req, res) => {

    try {
        const { _id } = req.params;
        const productoEliminado = await ProductosShema.findOneAndDelete({ _id });
        if (!productoEliminado) {
            return res.status(404).json({ message: "producto no encontrado" });
        }
        res.status(200).json({ message: "producto eliminado correctamente" });


    } catch (error) {
        res.status(500).json({ message: "error al eliminar el producto", error });
    }
}


export const actualizarProducto = async (req, res) => {
    try {
        const { _id } = req.params;

        // Solo los campos que vengan en req.body se actualizan
        const datos = { ...req.body };

        // Si hay imagen, se añade
        if (req.file) {
            datos.imagen_url = `uploads/${req.file.filename}`;
        }

        // Actualiza solo los campos presentes
        const producto = await ProductosShema.findByIdAndUpdate(_id, datos, { new: true });

        if (!producto) {
            return res.status(404).json({ message: 'producto no encontrado' });
        }

        return res.json({ message: 'producto actualizado', producto });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'error al actualizar', error });
    }
};

