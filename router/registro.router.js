import express from 'express';
import registrarUsuario from '../controllers/usuarios.controllers.js';
import validacionRegistro from '../middlewares/validacionUsuarios/validacionRegistro.js';

const routerUsuarios = express.Router();

routerUsuarios.post('/', validacionRegistro, registrarUsuario);

export default routerUsuarios;
