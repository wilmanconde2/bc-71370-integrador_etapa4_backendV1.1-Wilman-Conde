import mongoose from 'mongoose';

const CarritoEsquema = new mongoose.Schema(
  {
    carrito: Array
  },
  { versionKey: false, timestamps: true },
);

export default CarritoEsquema;
