const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser');

const db = require('./lib/database');
const { port } = require('./config');
const routes = require('./routes');

const app = express();

const upload = multer();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(routes);

app.listen(port, () => {

  console.log(`http://localhost:${port}`)

})