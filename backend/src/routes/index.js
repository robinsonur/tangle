const express = require('express');
const { signIn, signUp } = require('../controllers/authController');
const { getFiles, uploadFiles } = require('../controllers/tangleController');

const { Router } = express;
const router = Router();

router.get('/signin', signIn);

router.post('/signup', signUp);

router.get('/files', getFiles);

router.post('/files', uploadFiles);

module.exports = router;