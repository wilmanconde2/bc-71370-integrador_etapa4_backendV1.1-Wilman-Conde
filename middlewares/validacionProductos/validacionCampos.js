import { check } from 'express-validator';
import erroresValidacion from './erroresValidacion.js';

const validacionCampos = [
  check('nombre', 'El nombre es obligatorio').notEmpty(),
  check('precio', 'El precio debe ser numérico').isNumeric(),
  check('precio', 'El precio es obligatorio').notEmpty(),
  check('detalles', 'Los detalles son obligatorios').notEmpty(),
  check('stock', 'El stock debe ser numérico').isNumeric(),
  check('stock', 'El stock es obligatorio').notEmpty(),
  check('marca', 'La marca es obligatoria').notEmpty(),
  check('categoria', 'La categoría es obligatoria').notEmpty(),
  check('foto', 'La foto es obligatoria').notEmpty(),
  erroresValidacion
];

export default validacionCampos;
