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

    response.header('Access-Control-Allow-Methods', 'GEt, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})