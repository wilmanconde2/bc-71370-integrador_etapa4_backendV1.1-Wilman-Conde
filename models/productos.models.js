import mongoose from 'mongoose';
import productoSchema from './esquemas/ProductosEsquema.js';

const ProductoModelo = mongoose.model('productos', productoSchema);

const crearProducto = async (producto) => {
  try {
    const productoCreado = await ProductoModelo.create(producto);
    return productoCreado;
  } catch (error) {
    throw error;
  }
};

const obtenerProductos = async () => {
  try {
    const productos = await ProductoModelo.find({});
    return productos;
  } catch (error) {
    throw error;
  }
};

const obtenerProducto = async (id) => {
  try {
    const producto = await ProductoModelo.findById(id);
    return producto;
  } catch (error) {
    throw error;
  }
};

const actualizarProducto = async (id, productoActualizado, options) => {
  // const options = {new: true}
  try {
    const productoEditado = await ProductoModelo.findByIdAndUpdate(id, productoActualizado, options);
    return productoEditado;
  } catch (error) {
    throw error;
  }
};

const borrarProducto = async (id) => {
  try {
    const productoBorrado = await ProductoModelo.findByIdAndDelete(id);
    return productoBorrado;
  } catch (error) {
    throw error;
  }
};

export default {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  borrarProducto,
};
