import express from 'express';
import controladoresCarrito from '../controllers/carrito.controllers.js';

const routerCarrito = express.Router();

routerCarrito.post('/', controladoresCarrito.guardarCarrito);

routerCarrito.get('/', controladoresCarrito.obtenerCarrito);


export default routerCarrito;
