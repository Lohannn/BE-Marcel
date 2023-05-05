/*************************************************************************************
 * Objetivo: API para integração entre Back e Banco de dados (GET, POST, PUT, DELETE)
 * Autor: Lohannes da Silva Costa
 * Data: 14/04/2023
 * Versão: 1.0
 *************************************************************************************/

/*************************************************************************************
 * 
 * Instalação do PRISMA no projeto (biblioteca para conexão com o DB)
 * 
 * npm install prisma --save
 * npx prisma
 * npx prisma init
 * npm install @prisma/client --save
 * npx prisma migrate dev
 * 
**************************************************************************************/
//Import do arquivo da controller que irá solicitar a model os dados do BD.
var controllerAluno = require('./controller/controller_aluno.js')
var messages = require('./controller/modulo/config.js');

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

//Define que os dados que irão chegar no body da requisição será no padrão JSON.
const bodyParserJSON = bodyParser.json()

//Endpoint: Retorna todos os dados de alunos ou de um nome passado.
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    //Recolhe o parâmetro do id passado pela URL
    let nomeAluno = request.query.nome

    if (nomeAluno != undefined) {
        //Recebe os dados do controller
        let dadosAluno = await controllerAluno.getAlunoPeloNome(nomeAluno);


        //Valida se existe registro
        if (dadosAluno) {
            response.json(dadosAluno)
            response.status(200)
        } else {
            response.status(404)
            response.json()
        }
    } else {

        //Recebe os dados do controller
        let dadosAluno = await controllerAluno.getAlunos();

        //Valida se existe registro
        if (dadosAluno) {
            response.json(dadosAluno)
            response.status(200)
        } else {
            response.status(404)
            response.json()
        }
    }

})

//Endpoint: Retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    //Recolhe o parâmetro do id passado pela URL
    let idAluno = request.params.id

    //Recebe os dados do controller
    let dadosAluno = await controllerAluno.getAlunoPeloID(idAluno);

    //Valida se existe registro
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.status(404)
        response.json()
    }

})

//Endpoint: Insere um dado novo
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function (request, response) {

    let contentType = request.headers['content-type'];

    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe os dados encaminhados na requisição.
        let dadosBody = request.body


        let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    } else {
        response.status(messages.ERROR_INVALID_CONTENT_TYPE.status)
        response.json('')
    }
})

//Endpoint: Atualiza um dado existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function (request, response) {

    let contentType = request.headers['content-type'];

    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe o Id do Aluno pelo parametro.
        let idAluno = request.params.id;
        //Recebe os dados do Aluno encaminhado no corpo da requisição.
        let dadosBody = request.body

        let resultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, idAluno)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    } else {
        response.status(messages.ERROR_INVALID_CONTENT_TYPE.status)
        response.json('')
    }

})

//Endpoint: Deleta um dado existente, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let contentType = request.headers['content-type'];

    //Recebe o Id do Aluno pelo parametro.
    let idAluno = request.params.id;

    let validateAluno = await controllerAluno.getAlunoPeloID(idAluno)
    console.log(validateAluno.status);

    if (validateAluno.status != 404) {
        let resultDadosAluno = await controllerAluno.deletarAluno(idAluno)
        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    } else {
        response.status(validateAluno.status)
        response.json(validateAluno)
    }


})

app.listen(8080, function () {
    console.log('Aguardando requisições na porta 8080...');
})