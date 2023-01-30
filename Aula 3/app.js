/********************************************************************************************************************
 * Objetivo: Calcular Soma, Subtração, Multiplicação, Divisão. 
 * Autor: Lohannes da Silva Costa
 * Data: 30/01/2023
 * Versão: 1.0.1.30.23
 ********************************************************************************************************************/

//Import da Biblioteca ReadLine.
var readLine = require('readline');
const { isNull } = require('util');

//Cria o objeto para usar o  especialista em entrada de dados pelo teclado.
var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Função de Callback para entra o tipo de cálculo.
entradaDados.question('\n**********CALCULADORA**********\nDiga qual operação será usada no cálculo digitando o número correspodente: \n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (x)\n4 - Divisão (/)\n\n'
    , function (operacao) {

        let calculo;

        if (operacao == 1) {
            calculo = 'ADIÇÃO';
        } else if (operacao == 2) {
            calculo = 'SUBTRAÇÃO';
        } else if (operacao == 3) {
            calculo = 'MULTIPLICAÇÃO';
        } else if (operacao == 4) {
            calculo = 'DIVISÃO';
        }

        if ((operacao != 1) && (operacao != 2) && (operacao != 3) & (operacao != 4)) {
            console.log('ERRO: Operação não existente');
        } else {
            let tipo = operacao;

            console.log('---------' + calculo + '---------');
            entradaDados.question('Digite o primeiro valor: \n', function (primeiroValor) {
                let valor1 = primeiroValor.replace(',', '.');
                entradaDados.question('Digite o segundo valor: \n', function (segundoValor) {
                    let valor2 = segundoValor.replace(',', '.');

                    if (valor1 === '' || valor2 === '') {
                        console.log('ERRO: Algum dados não foi fornecido');
                    } else if (isNaN(valor1) || isNaN(valor2)) {
                        console.log('ERRO: Apenas números');
                    } else {

                        let resultado;

                        if (tipo == 1) {
                            resultado = parseFloat(valor1) + parseFloat(valor2);

                            console.log('Resultado: ' + valor1 + ' + ' + valor2 + ' = ' + resultado);
                        } else if (tipo == 2) {
                            resultado = parseFloat(valor1) - parseFloat(valor2);

                            console.log('Resultado: ' + valor1 + ' - ' + valor2 + ' = ' + resultado);
                        } else if (tipo == 3) {
                            resultado = parseFloat(valor1) * parseFloat(valor2);

                            console.log('Resultado: ' + valor1 + ' x ' + valor2 + ' = ' + resultado);
                        } else if (tipo == 4) {

                            if (valor2 == 0) {
                                console.log('ERRO: Não se pode dividir por 0');
                            } else {
                                resultado = parseFloat(valor1) / parseFloat(valor2);

                                console.log('Resultado: ' + valor1 + ' dividido por ' + valor2 + ' = ' + resultado);
                            }
                        }
                    }
                });
            });
        }
    });