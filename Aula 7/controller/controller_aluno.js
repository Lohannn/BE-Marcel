/**************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Data: 14/04/2023
 * Auto: Lohannes da Silva Costa
 * Versão: 1.0
 **************************************************************************************/

//Import do arquivo de configuração das variáveis, constantes e globais.
var messages = require('./modulo/config.js');

//Import do arquivo DAO para acessar dados do aluno no BD
let alunoDAO = require('../model/dao/alunoDAO.js')

//Insere um novo aluno.
var inserirAluno = async function (dadosAluno) {

    //Validação para tratar campos obrigatórios e quenatidade caracteres.
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 || dadosAluno.nome == null ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 || dadosAluno.rg == null ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 || dadosAluno.cpf == null ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 || dadosAluno.data_nascimento == null ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email > 200 || dadosAluno.email == null
    ) {
        return messages.ERROR_REQUIRED_FIELDS //Status Code 400
    } else {
        //Envia os dados para a Model inserir no banco de dados.
        let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        //Valida se o BD inseriu corretamente os dados.
        if (resultDadosAluno) {
            return messages.SUCCESS_CREATED_ITEM //Status Code 201
        } else {
            return messages.ERROR_INTERNAL_SERVER //Status Code 500
        }
    }
}

//Atualiza um aluno.
const atualizarAluno = async function (dadosAluno, IdAluno) {
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 || dadosAluno.nome == null ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 || dadosAluno.rg == null ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 || dadosAluno.cpf == null ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 || dadosAluno.data_nascimento == null ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email > 200 || dadosAluno.email == null
    ) {
        return messages.ERROR_REQUIRED_FIELDS //Status Code 400
    } else if (IdAluno == '' || IdAluno == undefined || IdAluno == null || isNaN(IdAluno)) {
        return messages.ERROR_INVALID_ID //Status Code 400
    } else {
        dadosAluno.id = IdAluno;

        let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno)

        if (resultDadosAluno) {
            return messages.SUCCESS_UPDATED_ITEM //status Code 200
        } else {
            return messages.ERROR_INTERNAL_SERVER //Status Code 500
        }
    }
}

//Deleta um aluno.
const deletarAluno = async function (IdAluno) {
    if (IdAluno == '' || IdAluno == undefined || IdAluno == null || isNaN(IdAluno)) {
        return messages.ERROR_INVALID_ID //Status Code 400
    } else {
        idDoAluno = IdAluno

        let resultDadosAluno = await alunoDAO.deleteAluno(idDoAluno)

        if (resultDadosAluno) {
            return messages.SUCCESS_DELETED_ITEM //status Code 200
        } else {
            return messages.ERROR_INTERNAL_SERVER //Status Code 500
        }
    }
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

    if (dadosAluno.length > 0) {
        if (dadosAluno) {
            //Criando um JSON com o atributo Alunos para encaminhar um Array de alunos
            dadosAlunosJSON.quantidade = dadosAluno.length
            dadosAlunosJSON.alunos = dadosAluno
            return dadosAlunosJSON
        } else {
            return false
        }
    } else {
        return messages.ERROR_ID_NOT_FOUND
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
    getAlunoPeloNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}