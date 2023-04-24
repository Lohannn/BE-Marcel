/**************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados.
 * Data: 14/04/2023
 * Auto: Lohannes da Silva Costa
 * Versão: 1.0
 **************************************************************************************/

//Insere um novo aluno no Banco de Dados.
const insertAluno = async function (dadosAluno){

}

//Atualiza um aluno no Banco de Dados.
const updateAluno = async function (dadosAluno){

}

//Deleta um aluno no Banco de Dados.
const deleteAluno = async function (IdAluno){

}

//Retorna todos os alunos.
const selectAllAlunos = async function (){
    //Import da biblioteca do prisma client
    let { PrismaClient } = require('@prisma/client');

    //Instância da classe PrismaClient
    let prisma = new PrismaClient()

    //scriptSQL para buscar todos os itens do BD
    let sql = 'SELECT * FROM tbl_aluno'

    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('SELECT * FROM tbl_aluno') - Executa diretamente o script dentro do método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if(rsAluno.length > 0){
        return rsAluno
    } else {
        return false
    }

}

//Retorna um aluno pelo ID.
const selectByIdAluno = async function (IdAluno){
    //Import da biblioteca do prisma client
    let { PrismaClient } = require('@prisma/client');

    //Instância da classe PrismaClient
    let prisma = new PrismaClient()

    //scriptSQL para buscar todos os itens do BD
    let sql = `select * from tbl_aluno where id = ${IdAluno}`

    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('SELECT * FROM tbl_aluno') - Executa diretamente o script dentro do método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if(rsAluno.length > 0){
        return rsAluno
    } else {
        return false
    }
}

//Retorna um aluno pelo Nome.
const selectByNameAluno = async function (NameAluno){
    //Import da biblioteca do prisma client
    let { PrismaClient } = require('@prisma/client');

    //Instância da classe PrismaClient
    let prisma = new PrismaClient()

    //scriptSQL para buscar todos os itens do BD
    let sql = `select * from tbl_aluno where nome like '%${NameAluno}%'`

    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('SELECT * FROM tbl_aluno') - Executa diretamente o script dentro do método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if(rsAluno.length > 0){
        return rsAluno
    } else {
        return false
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno
}