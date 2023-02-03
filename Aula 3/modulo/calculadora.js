/*****************************************************************************************************
 * Objetivo: Arquivo de funções para calculo matemáticos.
 * Data: 03/02/2023
 * Autor: Lohannes da Silva Costa
 * Versão:  1.0.2.03.23
 *****************************************************************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR)
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2;

    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2;

    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2;

    } else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) {
            console.log('ERRO: Não é possível realizar a divisão por 0');
        } else {
            resultado = valor1 / valor2;

        }
    } else {
        console.log('ERRO: Não é um tipo de cálculo válido.');
    }

    if (resultado == undefined) {
        return false;
    } else {
        return resultado.toFixed(2);
    }
}

//As functions que não estiverem aqui, não serão globais.
module.exports = {
    calculadora
}