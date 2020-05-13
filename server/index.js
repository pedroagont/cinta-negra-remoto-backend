const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const { errors } = require('celebrate');

//Middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//Endpoints
server.get('/', (req, res) => res.send('Hello World!'));

server.use('/api/v1', require('../router'));

server.use(errors());

// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };
