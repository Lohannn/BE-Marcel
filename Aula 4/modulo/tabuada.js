/********************************************************************************************************************
* Autor: Lohannes
* Data: 09/02/2023
* Versão: 1.0.2.09.23
* Objetivo: .
********************************************************************************************************************/

//Retorna o processamento de uma qualquer até um contador qualquer.
const calcularTabuada = function (multiplicando, maxMultiplicador) {
    let valor = Number(String(multiplicando).replace(',','.'));
    let maxMulti = Number(String(maxMultiplicador).replace(',','.'));
    let resultado;
    let status = true;

    if(valor == 0 || maxMulti == 0){
        status = false;
    } else if (isNaN(valor) || isNaN(maxMulti)){
        status = false;
    } else {
        for (let contador = 0; contador < maxMulti; contador++){
            resultado = valor * contador;
            console.log(valor + ' X ' + maxMulti + ' = ' + resultado);
        }
    }
    
    return status;
    
};

module.exports = {
    calcularTabuada
}