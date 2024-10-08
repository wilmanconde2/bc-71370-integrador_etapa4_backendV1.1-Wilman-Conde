import mongoose from "mongoose";
import CarritoEsquema from "./esquemas/CarritoEsquema.js";

const CarritoModelo = mongoose.model("carrito", CarritoEsquema);

const crearCarrito = async (carrito) => {
  try {
    const carritoGuardado = await CarritoModelo.create({ carrito });
    return carritoGuardado;
  } catch (error) {
    throw error;
  }
};

export { CarritoModelo, crearCarrito };
