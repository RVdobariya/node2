const express = require('express');
const routes = express.Router();
var authenticationController = require("/Users/dreamworld/Desktop/node/authenticationController.js")


routes.post("/login", authenticationController.login);
routes.post("/verifyToken", authenticationController.verifyToken);

module.exports = routes;