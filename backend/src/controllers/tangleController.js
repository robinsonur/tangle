const getFiles = (req, res) => {

  res.send('Obtener archivos');

}

const uploadFiles = (req, res) => {

  res.send('Guardar archivos');

}

module.exports = { getFiles, uploadFiles }