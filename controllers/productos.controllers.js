import modelos from '../models/productos.models.js';
import handleMongoId from '../utils/handle-mongo-id.js';

// ! endpoints CRUD
// POST => Create
const createProducto = async (req, res) => {
  const producto = req.body;

  try {
    const productoCreado = await modelos.crearProducto(producto);
    console.log('Se creo el producto correctamente');
    res.status(201).json(handleMongoId(productoCreado));
  } catch (error) {
    console.log('[create]', error);
    res.status(500).json({
      ok: false,
      mensaje: 'hubo un error al crear  el producto',
    });
  }
};

// READ => Get All
const getAll = async (req, res) => {
  try {
    const productos = await modelos.obtenerProductos();
    console.log('Se obtuvieron los productos correctamente');
    res.status(200).send(handleMongoId(productos));
  } catch (error) {
    console.log('[getAll]', error);
    res.status(500).json({
      ok: false,
      mensaje: 'hubo un error al obtener los productos',
    });
  }
};

// READ => Get One
const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const producto = await modelos.obtenerProducto(id);
    if (!producto) {
      return res.status(400).send('Producto no encontrado');
    } else {
      console.log('Se obtuvo el producto correctamente');
      res.status(200).send(handleMongoId(producto));
    }
  } catch (error) {
    console.log('[getOne]', error);
    res.status(500).json({
      ok: false,
      mensaje: 'hubo un error al obtener el producto',
    });
  }
};

// UPDATE => Update One
const updateProducto = async (req, res) => {
  try {
    const productoActualizado = await modelos.actualizarProducto(req.params.id, req.body, { new: true });
    if (!productoActualizado) {
      return res.status(400).json({
        ok: false,
        mensaje: 'Producto no encontrado',
      });
    } else {
      console.log('Se actualizó el producto correctamente');
      res.status(200).json(handleMongoId(productoActualizado));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      mensaje: 'hubo un error al actualizar el producto',
    });
  }
};

// DELETE => Delete One
const deleteProducto = async (req, res) => {
  const id = req.params.id;

  try {
    const productoBorrado = await modelos.borrarProducto(id);
    if (!productoBorrado) {
      return res.status(400).json({
        ok: false,
        mensaje: 'Producto no encontrado',
      });
    } else {
      console.log('Se eliminó el producto correctamente');
      res.status(200).json(handleMongoId(productoBorrado));
    }
  } catch (error) {
    console.log('[error]', error);
    res.status(500).json({
      ok: false,
      mensaje: 'hubo un error al borrar el producto',
    });
  }
};

export default {
  createProducto,
  getAll,
  getOne,
  updateProducto,
  deleteProducto,
};
