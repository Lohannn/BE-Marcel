/**************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Data: 14/04/2023
 * Auto: Lohannes da Silva Costa
 * Versão: 1.0
 **************************************************************************************/

//Insere um novo aluno.
const inserirAluno = function (dadosAluno) {

}

//Atualiza um aluno.
const atualizarAluno = function (dadosAluno) {

}

//Deleta um aluno.
const deletarAluno = function (IdAluno) {

}

//Retorna todos os alunos.
const getAlunos = async function () {
    let dadosAlunosJSON = {}

    //Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/dao/alunoDAO.js')

    //chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        //Criando um JSON com o atributo Alunos para encaminhar um Array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }
}

//Retorna um aluno pelo ID.
const getAlunoPeloID = async function (IdAluno) {
    let dadosAlunosJSON = {}

    //Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/dao/alunoDAO.js')

    //chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectByIdAluno(IdAluno)

    if (dadosAluno) {
        //Criando um JSON com o atributo Alunos para encaminhar um Array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }

}

//Retorna um aluno pelo Nome.
const getAlunoPeloNome = async function (NomeAluno) {
    let dadosAlunosJSON = {}

    //Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/dao/alunoDAO.js')

    //chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectByNameAluno(NomeAluno)

    if (dadosAluno) {
        //Criando um JSON com o atributo Alunos para encaminhar um Array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }
}

module.exports = {
    getAlunos,
    getAlunoPeloID,
    getAlunoPeloNome
}