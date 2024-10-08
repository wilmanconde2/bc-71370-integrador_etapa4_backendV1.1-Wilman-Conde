import { validationResult } from 'express-validator';

const erroresValidacion = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json(errores);
  }
  next();
};

export default erroresValidacion;
