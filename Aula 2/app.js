/********************************************************************************************************************
 * Objetivo: Calcular a média de 4 notas escolares. 
 * Autor: Lohannes da Silva Costa
 * Data: 30/01/2023
 * Versão: 1.2.1.30.23
 ********************************************************************************************************************/

//Import da Biblioteca ReadLine.
var readLine = require('readline');
const { isNull } = require('util');

//Cria o objeto para usar o  especialista em entrada de dados pelo teclado.
var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
*   Criação de variáveis
    * var - Cria um espaço em memória de escopo global para o projeto, ou seja,
        * essa variável poderá ser utilizada em qualquer parte do arquivo (várias funções). 
        * 
    * let - Cria um espaço em memória de escopo local para o projeto, ou seja,
        * essa variável só poderá ser utilizada dentro da função que foi criada.
        * 
    * const - Cria um espaço em memória de escopo local ou global para o projeto, ou seja,
        * essa constante poderá ser utilizada em qualquer parte do projeto e nunca sofrerá alteração.
*
*
*/

//Função de Callback para entrar o nome do aluno
entradaDados.question('Digite seu nome: \n', function (nome) {
    //Recebe o valor digitado pelo teclado.  
    let nomeAluno = nome;

    //Função de Callback para entrar a primeira nota.
    entradaDados.question('Digite a primeira nota: \n', function (nota1) {
        let primeiraNota = nota1;

        //Função de Callback para entrar a segunda nota.
        entradaDados.question('Digite a segunda nota: \n', function (nota2) {
            let segundaNota = nota2;

            //Função de Callback para entrar a terceira nota.
            entradaDados.question('Digite a terceira nota: \n', function (nota3) {
                let terceiraNota = nota3;

                //Função de Callback para entrar a quarta nota.
                entradaDados.question('Digite a terceira nota: \n', function (nota4) {
                    let quartaNota = nota4;

                    if ((primeiraNota === '' || segundaNota === '' || terceiraNota === '' || quartaNota === '')) {
                        console.log('\nERRO: Algum dado não foi fornecido');
                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                        console.log('\nERRO: Alguma das notas não é um Número');
                    } else if (primeiraNota > 10 || segundaNota > 10 || terceiraNota > 10 || quartaNota > 10 ||
                        primeiraNota < 0 || segundaNota < 0 || terceiraNota < 0 || quartaNota < 0) {
                        console.log('\nERRO: Alguma das notas ultrapassou o limite')
                    } else {
                        let media = (parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota) + parseFloat(quartaNota)) / 4;

                        console.log('Nome do Aluno: ' + nome + '\nPortuguês: ' + nota1 + '\nMatemática: '
                            + nota2 + '\nInglês: ' + nota3 + '\nEd. Física: ' + nota4 + '\n-------------' + '\nMédia Final: ' + media.toFixed(1));

                        if (media < 7) {
                            console.log('\nAluno Reprovado');
                        } else {
                            console.log('\nAluno Aprovado');
                        }
                    }

                });

            });

        });

    });

});
