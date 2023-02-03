/********************************************************************************************************************
* Autor: Marcel
* Data: 02/02/2023
* Versão: 1.0.2.02.23
* Objetivo: Calcular Soma, Subtração, Multiplicação, Divisão.
********************************************************************************************************************/

var readline = require('readline');
const { type } = require('os');
var matematica = require('./modulo/calculadora.js');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Valor: \n', function (numero1) {

    let valor1 = numero1.replace(',', '.');

    //replace, substring, length, uppercase, lowercase, indexof

    entradaDados.question('Valor2: \n', function (numero2) {

        let valor2 = numero2.replace(',', '.');

        entradaDados.question('Escolha uma operação matemática: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ] \n', function (tipoCalculo) {

            let operacao = tipoCalculo.toUpperCase();
            let resultado;

            if (valor1 == '' || valor2 == '' | operacao == '') {
                console.log('ERRO: Não é possível calcular se algum dado estiver em branco.');
                entradaDados.close();

                // }else if (typeof(valor1) != 'number')
                //     typeof() - identifica o tipo de dados de um elemento.
                //     isNaN() - Identifica se é um número ou não.
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possível calcular valores que não forem números.');
                entradaDados.close();
            } else {

                resultado = matematica.calculadora(valor1, valor2, operacao)
                if (resultado != false) {
                    console.log(resultado);
                    entradaDados.close();
                } else {
                    entradaDados.close();
                }


            }
        });

    });

});