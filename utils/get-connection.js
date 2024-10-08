import mongoose from 'mongoose';

// ! Conexión a la base de datos
const conexionDB = async (uri_remota) => {
  try {
    await mongoose.connect(uri_remota);
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.log('No se pudo conectar a la base de datos', error);
  }
};

export default conexionDB;
