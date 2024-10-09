import Usuario from '../models/esquemas/UsuarioEsquema.js';
import bcrypt from 'bcrypt';
import handleMongoId from '../utils/handle-mongo-id.js';

const registrarUsuario = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({
      username,
      email,
      password: hashedPassword,
    });

    await nuevoUsuario.save();
    res.status(201).json({ usuario: handleMongoId(nuevoUsuario) });
  } catch (error) {
    res.status(400).json({ ok: false, mensaje: error.message });
  }
};

export default registrarUsuario
