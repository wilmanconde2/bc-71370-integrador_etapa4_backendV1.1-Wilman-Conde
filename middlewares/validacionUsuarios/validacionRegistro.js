import { check } from 'express-validator';
import erroresValidacion from '../validacionProductos/erroresValidacion.js';

const validacionRegistro = [
  check('username', 'El nombre de usuario es obligatorio').notEmpty(),
  check('email', 'El correo debe ser valido').isEmail(),
  check('email', 'El correo es obligatorio').notEmpty(),
  check('password', 'La contraseña es obligatoria y debe ser segura').isString(),
  erroresValidacion,
];

export default validacionRegistro;
