import express from 'express';
import { uploadImagen } from '../controllers/upload.controllers.js';
import uploadMiddleware from '../middlewares/upload.middleware.js';

const routerUpload = express.Router();

routerUpload.post('/', uploadMiddleware, uploadImagen);

export default routerUpload;
