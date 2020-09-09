const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//INICIANDO O APP
const app = express();
app.use(express.json());
app.use(cors());

//INICIANDO O BANCO DE DADOS 
mongoose.connect('mongodb://localhost:27017/nodeapi',
{ useNewUrlParser:true });

//TEM QUE CHAMAR O MODEL ABAIXO 
//DA CONEXÃO COM O BAQNCOA DE DADOS
requireDir('./src/models');

//ROTAS
app.use("/api", require("./src/routes"));

app.listen(3001);