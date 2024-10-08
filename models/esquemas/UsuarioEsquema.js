import mongoose from 'mongoose';

const UsuarioEsquema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
);

const Usuario = mongoose.model('Usuario', UsuarioEsquema);

export default Usuario;
