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

//Endpoint: Retorna todos os dados de alunos ou de um nome passado.
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {
    //Import do arquivo da controller que irá solicitar a model os dados do BD.
    let controllerAluno = require('./controller/controller_aluno.js')

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
            response.json()
            response.status(404)
        }
    } else {
        //Recebe os dados do controller
        let dadosAluno = await controllerAluno.getAlunoPeloNome(nomeAluno);

        //Valida se existe registro
        if (dadosAluno) {
            response.json(dadosAluno)
            response.status(200)
        } else {
            response.json()
            response.status(404)
        }
    }

})

//Endpoint: Retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let controllerAluno = require('./controller/controller_aluno.js')

    //Recolhe o parâmetro do id passado pela URL
    let idAluno = request.params.id

        //Recebe os dados do controller
        let dadosAluno = await controllerAluno.getAlunoPeloID(idAluno);
        console.log(dadosAluno);

        //Valida se existe registro
        if (dadosAluno) {
            response.json(dadosAluno)
            response.status(200)
        } else {
            response.json()
            response.status(404)
        }

})

//Endpoint: Insere um dado novo
app.post('/v1/lion-school/aluno', cors(), async function (request, response) {

})

//Endpoint: Atualiza um dado existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

//Endpoint: Deleta um dado existente, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

app.listen(8080, function () {
    console.log('Aguardadno requisições na porta 8080...');
})