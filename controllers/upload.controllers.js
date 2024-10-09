export const uploadImagen = (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send('No se recibió ninguna imagen');
  }

  const urlCompleta = `${req.protocol}://${req.get('host')}/upload/${file.filename}`;

  res.status(201).json({ foto: urlCompleta });
};

