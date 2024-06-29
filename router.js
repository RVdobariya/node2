const express = require('express');
const routes = express.Router();

// Admin
routes.use('/user', require('./methos.js'));

routes.use('/auth', require('./authentication.js'));


module.exports = routes;