/*************************************************************************************
 * Objetivo: API para integração entre Back e Banco de dados (GET, POST, PUT, DELETE)
 * Autor: Lohannes da Silva Costa
 * Data: 14/04/2023
 * Versão: 1.0
 *************************************************************************************/

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

//CRUD (Create, Read, Update, Delete)

/*************************************************************************************
 * Objetibo: API de controle de Alunos.
 * Data: 14/04/2023
 * Autor: Lohannes da Silva Costa
 * Versão: 1.0
 *************************************************************************************/

    //Endpoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async, function (request, response){

    })

    //Endpoint: Retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async, function (request, response){
        
    })

    //Endpoint: Insere um dado novo
    app.post('/v1/lion-school/aluno', cors(), async, function (request, response){
        
    })

    //Endpoint: Atualiza um dado existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async, function (request, response){
        
    })

    //Endpoint: Deleta um dado existente, filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async, function (request, response){
        
    })

app.listen(8080, function(){
    console.log('aguardadno requisições na porta 8080...');
})