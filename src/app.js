//Configuración principal de la aplicación (Express, rutas, etc.)

const express = require('express');
const config = require("./config");

const app = express();

app.set('port', config.app.port);

module.exports = app;
