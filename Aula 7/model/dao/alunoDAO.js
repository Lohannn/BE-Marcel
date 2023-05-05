/**************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados.
 * Data: 14/04/2023
 * Auto: Lohannes da Silva Costa
 * Versão: 1.0
 **************************************************************************************/

//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client');

//Instância da classe PrismaClient
var prisma = new PrismaClient()

//Insere um novo aluno no Banco de Dados.
const insertAluno = async function (dadosAluno) {
    //ScriptSQL para inserir dados.
    let sql = `insert into tbl_aluno (
        nome,
        rg,
        cpf,
        data_nascimento,
        email
    ) values (
        '${dadosAluno.nome}',
        '${dadosAluno.rg}',
        '${dadosAluno.cpf}',
        '${dadosAluno.data_nascimento}',
        '${dadosAluno.email}'
    )`

    //Executa o sript no BD.
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus){
        return true
    } else{
        return false
    }
}

//Atualiza um aluno no Banco de Dados.
const updateAluno = async function (dadosAluno) {
    let sql = `update tbl_aluno set
                        nome = '${dadosAluno.nome}',
                        rg = '${dadosAluno.rg}',
                        cpf = '${dadosAluno.cpf}',
                        data_nascimento = '${dadosAluno.data_nascimento}',
                        email = '${dadosAluno.email}'
                    where id = '${dadosAluno.id}'`;

    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if(resultStatus){
        return true
    } else{
        return false
    }
}

//Deleta um aluno no Banco de Dados.
const deleteAluno = async function (IdAluno) {
    let sql = `delete from tbl_aluno where id = ${IdAluno}`

    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if(resultStatus){
        return true
    } else{
        return false
    }
}

//Retorna todos os alunos.
const selectAllAlunos = async function () {

    //scriptSQL para buscar todos os itens do BD
    let sql = 'SELECT * FROM tbl_aluno'

    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('SELECT * FROM tbl_aluno') - Executa diretamente o script dentro do método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }

}

//Retorna um aluno pelo ID.
const selectByIdAluno = async function (IdAluno) {


    //scriptSQL para buscar todos os itens do BD
    let sql = `select * from tbl_aluno where id = ${IdAluno}`

    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('SELECT * FROM tbl_aluno') - Executa diretamente o script dentro do método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

//Retorna um aluno pelo Nome.
const selectByNameAluno = async function (NameAluno) {

    //scriptSQL para buscar todos os itens do BD
    let sql = `select * from tbl_aluno where nome like '%${NameAluno}%'`

    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('SELECT * FROM tbl_aluno') - Executa diretamente o script dentro do método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno,
    insertAluno,
    updateAluno,
    deleteAluno
}