const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

//Metódos HTTP
//GET : BUSCAR uma informação no back-end
//POST : Criar uma informção no back-end
//PUT: Alterar uma informação no back-end
//DELETE: Deleta uma informação no back-end

//Tipos de Parametros

//Query params : Parâmetros Nomeados enviados na rota após "?" (filtros,paginação)
//Route Params: Parâmetros ultilizados para identificar recursos
//Request Body: Corpo da requisição, utilizado para criar ou alterar recurso


