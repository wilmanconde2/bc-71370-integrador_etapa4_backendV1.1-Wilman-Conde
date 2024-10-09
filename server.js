import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'node:path';
import conexionDB from './utils/get-connection.js';
import routerCarrito from './router/carrito.router.js';
import routerProductos from './router/productos.router.js';
import routerRegistro from './router/registro.router.js';
import routerUpload from './router/upload.router.js';

// ! Variables y constantes
const uri_remota = process.env.MONGO_URI;
const app = express();
const PORT = process.env.PORT || 2222;

// ! Middlewares
app.use(express.static(path.join('./public')));
app.use(express.json());
app.use(cors());

// ! Rutas
app.use('/api/v1/productos', routerProductos);
app.use('/api/v1/carrito', routerCarrito);
app.use('/api/v1/registro', routerRegistro);
app.use('/api/v1/upload', routerUpload);

app.get('/', (req, res) => {
  res.redirect('/api/v1/productos');
});

app.all('*', (req, res) => {
  res.status(404).json({
    ok: false,
    ruta: `${req.url}`,
    metodo: `${req.method}`,
    mensaje: 'No se encontró la ruta solicitada',
  });
});

// ! Arranque del servidor
app.listen(PORT, (err) => {
  if (err) throw new Error('No se pudo levantar el servidor');
  console.log(`Arrancando el servidor en: http://localhost:${PORT}`);
  conexionDB(uri_remota);
});
