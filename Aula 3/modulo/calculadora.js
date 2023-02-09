/*****************************************************************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos.
 * Data: 03/02/2023
 * Autor: Lohannes da Silva Costa
 * Versão:  1.0.2.03.23
 *****************************************************************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR)
//Forma 1 de criar uma função
function calcula(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2;

    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2;

    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2;

    // } else if (operacao == 'DIVIDIR') {
    //     if (valor2 == 0) {
    //         console.log('ERRO: Não é possível realizar a divisão por 0');
    //         status = false;
    //     } else {
    //         resultado = valor1 / valor2;
    //     }
    // } else {
    //     console.log('ERRO: Não é um tipo de cálculo válido.');
    //     status = false;
    // }

    switch (operacao) {

        case 'SOMAR':
            resultado = valor1 + valor2;
            break;
        case 'SUBTRAIR':
            resultado = valor1 - valor2;
            break;
        case 'MULTIPLICAR':
            resultado = valor1 * valor2;
            break;
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Não é possível realizar a divisão por 0');
                status = false;
            } else {
                resultado = valor1 / valor2;
            }
            break;
        default:
            console.log('ERRO: Não é um tipo de cálculo válido.');
            status = false;

    }

    if (resultado == undefined && status == false) {
        return false;
    } else {
        return resultado.toFixed(2);
    }
}

//Forma 2 de criar uma função (é uma das mais utilizadas)
const calculadora = function (numero1, numero2, tipoCalculo) {
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2;

    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2;

    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2;

    // } else if (operacao == 'DIVIDIR') {
    //     if (valor2 == 0) {
    //         console.log('ERRO: Não é possível realizar a divisão por 0');
    //         status = false;
    //     } else {
    //         resultado = valor1 / valor2;
    //     }
    // } else {
    //     console.log('ERRO: Não é um tipo de cálculo válido.');
    //     status = false;
    // }

    switch (operacao) {

        case 'SOMAR':
            resultado = SOMAR(valor1, valor2);
            break;
        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1, valor2);
            break;
        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1, valor2);
            break;
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Não é possível realizar a divisão por 0');
                status = false;
            } else {
                resultado = DIVIDIR(valor1, valor2);
            }
            break;
        default:
            console.log('ERRO: Não é um tipo de cálculo válido.');
            status = false;

    }

    if (resultado == undefined && status == false) {
        return false;
    } else {
        return resultado.toFixed(2);
    }
}

//Forma 3 de criar uma função (Arrow Function)
const SOMAR         = (valor1, valor2) => valor1 + valor2;
const SUBTRAIR      = (valor1, valor2) => valor1 - valor2;
const MULTIPLICAR   = (valor1, valor2) => valor1 * valor2;
const DIVIDIR       = (valor1, valor2) => valor1 / valor2;

//As functions que não estiverem aqui, não serão globais.
module.exports = {
    calculadora
}