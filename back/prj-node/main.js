
//const express = require("express");
//const morgan = require('morgan');
 // const produtos = require ("./produtos.json");
const mongoose = require("mongoose");

// var str_connection = "";
var URL = 'mongodb://localhost:27017/local';

mongoose.connect(URL);
const con = mongoose.connection;

con.on('open', function(){
    console.log('Conectado ao MongoDB!');
});

con.on('error', function(){
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function(){
  console.log('Desconetado do MongoDB!');
});
  

// const srv = express();
// srv.use(express.urlencoded({'extended:': true}));
// srv.use(express.json());

// const get = (req, res) => res.send("Servidor Express (GET)");
// const log = () => console.log("Servidor Express rodando em localhost:3000...");

// const produtosFunc = (req, res) => res.json(produtos);

// srv.get('/', get);
// srv.get('/produtos', produtosFunc);

// srv.listen(3000, log);

