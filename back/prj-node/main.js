const express = require("express");
const morgan = require("morgan");


const srv = express();
srv.use(Morgan('dev'));
srv.use(express.urlencoded({'extended:': true}));
srv.use(express.json());

const get = (req, res) => res.send("Servidor Express (GET)");
const log = () => console.log("Servidor Express rodando em localhost:3000...");

const produtosFunc = (req, res) => res.json(produtos);

srv.get('/', get);
srv.get('/produtos', produtosFunc);

srv.listen(3000, log);

