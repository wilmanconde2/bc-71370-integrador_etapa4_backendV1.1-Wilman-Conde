import { crearCarrito, CarritoModelo } from '../models/carrito.models.js';

const guardarCarrito = async (req, res) => {
  const productosCarrito = req.body;
  try {
    const carritoGuardado = await crearCarrito(productosCarrito);
    res.status(201).json(carritoGuardado);
  } catch (error) {
    console.error('Mensaje:', error);
    res.status(500).json({ mensaje: 'No se pudo guardar el carrito' });
  }
};

const obtenerCarrito = async (req, res) => {
  try {
    const carrito = await CarritoModelo.findOne();

    if (!carrito) {
      return res.status(404).json({ mensaje: 'No se encontró ningún carrito' });
    }

    res.status(200).json(carrito);
  } catch (error) {
    console.error('Mensaje:', error);
    res.status(500).json({ mensaje: 'No se pudo obtener el carrito' });
  }
};

export default {
  guardarCarrito,
  obtenerCarrito,
};
