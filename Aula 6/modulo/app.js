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
const estadosCidades = require('./app/main.js')

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


//EndPoint para listar todos os estados.
app.get('/estados', cors(), async function (request, response, next) {

    let statusCode;
    let dadosEstado = {};

    let estados = estadosCidades.getListaDeEstados()

    //Tratamento para validar o sucesso da requisição
    if (estados) {
        statusCode = 200
        dadosEstado = estados
    } else {
        statusCode = 500
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})

//Endpoint para listar os dados do estado filtrando pela sigla passada.
app.get('/estado/:uf', cors(), async function (request, response, next) {

    let statusCode;
    let dadosEstado = {};
    //Recebe a sigla do estado que enviada pela url da requisição.
    let siglaEstado = request.params.uf

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstado.message = 'Não foi possível processar pois os dados de entrada (uf) que foram enviados não correspondem ao exigido, confira o valor pois não poder ser Vazio, precisa ser Caracteres e ter ao 2 digítos.'
    } else {
        let estado = estadosCidades.getDadosEstado(siglaEstado)

        //Tratamento para validar o sucesso da requisição
        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})

app.get('/capital/:uf', cors(), async function (request, response, next) {

    let statusCode;
    let dadosEstado = {};

    let siglaEstado = request.params.uf

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstado.message = 'Não foi possível processar pois os dados de entrada (uf) que foram enviados não correspondem ao exigido, confira o valor pois não poder ser Vazio, precisa ser Caracteres e ter ao 2 digítos.'
    } else {
        let capital = estadosCidades.getCapitalEstado(siglaEstado)

        //Tratamento para validar o sucesso da requisição
        if (capital) {
            statusCode = 200
            dadosEstado = capital
        } else {
            statusCode = 404
        }
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})

app.get('/estados/:regiao', cors(), async function (request, response, next){

    let statusCode;
    let dadosEstado = {};

    let regiaoBrasil = request.params.regiao

    if (regiaoBrasil == '' || regiaoBrasil == undefined || !isNaN(regiaoBrasil)) {
        statusCode = 400
        dadosEstado.message = 'Não foi possível processar pois os dados de entrada (regiao) que foram enviados não correspondem ao exigido, confira o valor pois não poder ser Vazio e precisa ser Caracteres.'
    } else {
        let regiao = estadosCidades.getEstadosRegiao(regiaoBrasil)

        //Tratamento para validar o sucesso da requisição
        if (regiao) {
            statusCode = 200
            dadosEstado = regiao
        } else {
            statusCode = 404
        }
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})

app.get('/capitais', cors(), async function (request, response, next) {
    let statusCode;
    let dadosEstado = {};

    let capitais = estadosCidades.getCapitalPais()

    //Tratamento para validar o sucesso da requisição
    if (capitais) {
        statusCode = 200
        dadosEstado = capitais
    } else {
        statusCode = 500
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})

app.get('/cidades/:uf', cors(), async function (request, response, next) {
    let statusCode;
    let dadosEstado = {};
    //Recebe a sigla do estado que enviada pela url da requisição.
    let siglaEstado = request.params.uf

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstado.message = 'Não foi possível processar pois os dados de entrada (uf) que foram enviados não correspondem ao exigido, confira o valor pois não poder ser Vazio, precisa ser Caracteres e ter ao 2 digítos.'
    } else {
        let cidades = estadosCidades.getCidades(siglaEstado)

        //Tratamento para validar o sucesso da requisição
        if (cidades) {
            statusCode = 200
            dadosEstado = cidades
        } else {
            statusCode = 404
        }
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})

app.listen(8080, function () {
    console.log("Servidor aguardando requisições na porta 8080.");
})