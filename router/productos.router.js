import express from 'express';
import controladores from  '../controllers/productos.controllers.js'
import validacionCampos from '../middlewares/validacionProductos/validacionCampos.js';

const routerProductos = express.Router();

routerProductos.post('/', validacionCampos, controladores.createProducto);
routerProductos.get('/', controladores.getAll);
routerProductos.get('/:id', controladores.getOne);
routerProductos.put('/:id', validacionCampos, controladores.updateProducto);
routerProductos.delete('/:id', controladores.deleteProducto);

export default routerProductos;
  