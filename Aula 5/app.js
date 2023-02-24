/***********************************************************************************************************************************
 * Objetivo: Utilizar códigos e métodos de array.
 * Data: 24/01/2023
 * Autor: Lohannes
***********************************************************************************************************************************/

// [ ] - Representa um objeto do tipo array
// { } - Representa um objeto do tipo 

const listaNomes = ['Amanda', 'Bernardo', true, 'Débora', 'Eleanor', 5]
const listaProdutos = ['Mouse', 'Teclado', 'Monitor']

const percorrerArrays = function () {
    //Verifica o tipo de dado do elemento listaNomes.
    console.log(typeof (listaNomes))

    //Verifica o tipo de dado de um indice do bjeto listaNomes.
    console.log(typeof (listaNomes[2]))

    //Exibe todos os itens do Array.
    console.log(listaNomes)

    //Exibe uma tabela com o conteúdo do Array.
    console.table(listaNomes)

    console.log(`O nome do aluno é: ${listaNomes[0]}`)
    console.log(`O nome do aluno é: ${listaNomes[2]}`)

    //lenght - retorna a quantidade de itens de um array
    console.log(listaNomes.length)

    // Percorrendo um Array com While.
    console.log('\nExemplo com While: ')
    let cont = 0; //Start
    let qtItens = listaNomes.length; //Stop

    while (cont < qtItens) {
        console.log(listaNomes[cont]);
        cont++;
    }

    // Percorrendo um Array com For.
    console.log('\nExemplo com For: ')
    for (let contador = 0; contador < qtItens; contador++) {
        console.log(listaNomes[contador]);
    }

    //Percorrendo um Array com For Each.
    console.log('\nExemplo com ForEach: ')
    listaNomes.forEach(function (nome) {
        console.log(nome)
    })
}

const manipulandoDados = function(){
    //push - adiciona novos itens no final do Array.
    listaProdutos.push('Memória', 'Webcam', 'Gabinete', 'Fone')
    console.table(listaProdutos)

    //unshift - adiciona novos itens no começo do Array.
    listaProdutos.unshift('HD', 'Placa-Mãe', 'SSD')
    console.table(listaProdutos)

    //pop - remove o ultimo item do array.
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - remove o primeiro item do Array.
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice - Permite criar uma cópia de um array
    const novosProdutos = listaProdutos.slice();
    console.table(novosProdutos)

    //indexOf - Retorna o ìndice do parâmetro passado caso exista. Caso retorne -1, esse item não existe.
    console.log(listaProdutos.indexOf('Gabinete'))

    if(listaProdutos.indexOf('Placa-Mãe') >= 0){
        console.log('Produto Encontrado')
    } else {
        console.log('Produto não Encontrado')
    }
}

manipulandoDados()