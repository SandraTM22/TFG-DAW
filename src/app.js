//Configuración principal de la aplicación (Express, rutas, etc.)

const express = require('express');
const config = require('./config');
const users = require('./modules/users/route');

const app = express();

//Configuración puerto
app.set('port', config.app.port);

//Rutas
app.use('/api/usuarios', users)

module.exports = app;
