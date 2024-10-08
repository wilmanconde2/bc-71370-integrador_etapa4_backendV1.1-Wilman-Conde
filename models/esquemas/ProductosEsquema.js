import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    foto: String,
    categoria: String,
    precio: Number,
    stock: Number,
    marca: String,
    detalles: String,
  },
  { versionKey: false, timestamps: true },
);

export default productoSchema;
