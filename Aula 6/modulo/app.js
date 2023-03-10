/******************************************************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de estados e cidades.
 * Autor: Lohannes
 * Data: 10/03/2023
 * Versão: 1.0
 ******************************************************************************************************************/

/**
*  Express - dependencia para realizar requisições de API pelo protocolo HTTP
*       npm install express --save
*         
*  Cors - dependencia para gerenciar permissões de requisição da API
*       npm install cors --save
* 
*  Body Parser - dependencia que gerencia o corpo das requisições
*       npm install body-parser --save
*/

//Import das dependencias do projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use((request, response, next) => {
    //API pública - fica disponível para utilização de qualquer aplicação.
    //API privada - somente o IP informado poderá consumir dados da API

    //Define se a API será pública ou privada.
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir quais métodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissão
    app.use(cors())

    next();
})

//EndPoints

//EndPoint para listar todos os estados
app.get('/estados', cors(), async function(request, response, next){
    const estadosCidades = require('./app/main.js')
    let estados = estadosCidades.getListaDeEstados()

    response.status(200);
    response.json(estados)
})

app.listen(8080, function() {
    console.log("Servidor aguardando requisições na porta 8080.");
})