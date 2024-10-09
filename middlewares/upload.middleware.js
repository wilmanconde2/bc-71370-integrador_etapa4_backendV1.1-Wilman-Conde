import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'node:path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const rutaDeAlmacenamiento = path.join('public', 'upload');
    cb(null, rutaDeAlmacenamiento);
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split('.').pop();
    const nombreArchivo = `${uuidv4()}.${extension}`;
    cb(null, nombreArchivo);
  },
});

const uploadMiddleware = multer({ storage }).single('foto');;

export default uploadMiddleware;
