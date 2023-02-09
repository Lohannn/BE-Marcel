/********************************************************************************************************************
* Autor: Lohannes
* Data: 09/02/2023
* Versão: 1.0.2.09.23
* Objetivo: .
********************************************************************************************************************/

var readline = require('readline');
const { stdin } = require('process');
var matematica = require('./modulo/tabuada.js');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

entradaDados.question('Digite qual número será multiplicado: ', function(multiplicando){
    let valor = multiplicando.replace(',','.');

    entradaDados.question('Digite até que número ele será multiplicado: ', function(multiplicador){
        let maxMulti = multiplicador.replace(',','.');
        let resultado;

        if(valor == '' || maxMulti == ''){
            console.log('ERRO: Não se pode colocar valores vazios.')
            entradaDados.close();
        } else if(valor == 0 || maxMulti == 0){
            console.log('ERRO: Nenhum dos valores deve ser zero.')
            entradaDados.close();
        } else if(isNaN(valor) || isNaN(maxMulti)){
            console.log('ERRO: Os dois valores devem ser números.')
            entradaDados.close();
        } else {
            resultado = matematica.calcularTabuada(valor, maxMulti)
            if(resultado === false){
                entradaDados.close()
            } else {
                entradaDados.close();
            }
        }

    })
})