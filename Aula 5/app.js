/***********************************************************************************************************************************
 * Objetivo: Utilizar códigos e métodos de array.
 * Data: 24/01/2023
 * Autor: Lohannes
***********************************************************************************************************************************/

// [ ] - Representa um objeto do tipo array
// { } - Representa um objeto do tipo 

const listaNomes = ['Amanda', 'Bernardo', 'João', 'Débora', 'Eleanor', 'Maria']
const listaProdutos = ['Mouse', 'Teclado', 'Monitor', 'Gabinete', 'HD', 'Memória']

/********************************************************************************************************************************
 * JSON é composto por: (atributo) e valor
 * 
 *   Chave   Valor   Chave       Valor       Chave         Valor
 *  {nome : 'José', celular : '92173091097', email : 'jose@gmail.com'}
 * 
 ********************************************************************************************************************************/

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

const manipulandoDados = function () {
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

    if (listaProdutos.indexOf('Placa-Mãe') >= 0) {
        console.log('Produto Encontrado')
    } else {
        console.log('Produto não Encontrado')
    }
}

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;

    //splice - Permite apagar um ou mais itens de um array através do index. Caso o segundo parâmetro não 
    //seja definido, irá apagar todos os elementos a partir daquele índice.
    if (indice >= 0) {
        listaProdutos.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }

    return status

}

const removerElementoCopia = function (lista, nomeItem) {
    //Entrada
    let nome = nomeItem;
    let novaLista = lista.slice();
    let indice = novaLista.indexOf(nome);
    let resultado;

    //Processamento
    if (indice >= 0) {
        novaLista.splice(indice, 1);
        resultado = novaLista
    } else {
        resultado = false;
    }

    //Saída
    return resultado
}

//manipulandoDados();
// console.table(removerElementoCopia(listaProdutos,'HD'));
// console.table(listaProdutos)

const listagemProdutos = function () {
    //Forma 1 de criar um JSON e já atribuir chaves e valores.
    //    let listProdutosJSON = {produtos : listaProdutos, clientes : listaNomes}

    //Forma 2 de criar um JSON e já atribuir chaves e valores.
    //    let listProdutosJSON = {};

    //    listProdutosJSON.produtos = listaProdutos;
    //    listProdutosJSON.clientes = listaNomes;

    //Extraindo valores JSON e Array.
    //    console.log(listProdutosJSON)
    //    console.log(listProdutosJSON.produtos[0])
    //    console.log(listProdutosJSON.clientes[2])
    let listProdutosJSON = {}
    let listProdutosArray = [{
        nome: 'Monitor',
        quantidade: 300,
        marca: 'Dell',
        valor: 1000,
        descricao: 'Monitor Dell ...',
        codigo: 1
    },
    {
        nome: 'Monitor',
        quantidade: 280,
        marca: 'LG',
        valor: 1300,
        descricao: 'Monitor LG ...',
        codigo: 2
    },
    {
        nome: 'Teclado',
        quantidade: 150,
        marca: 'DELL',
        valor: 200,
        descricao: 'Monitor DELL ...',
        codigo: 3
    },
    {
        nome: 'Teclado',
        quantidade: 360,
        marca: 'LG',
        valor: 230,
        descricao: 'Teclado LG ...',
        codigo: 4
    },
    {
        nome: 'Teclado',
        quantidade: 100,
        marca: 'Logitech',
        valor: 230,
        descricao: 'Teclado Logitech ...',
        codigo: 5
    },
    {
        nome: 'Teclado',
        quantidade: 100,
        marca: 'Razer',
        valor: 1320,
        descricao: 'Teclado Razer ...',
        codigo: 6
    },
    {
        nome: 'Mouse',
        quantidade: 450,
        marca: 'DELL',
        valor: 120,
        descricao: 'Mouse DELL ...',
        codigo: 7
    },
    {
        nome: 'Mouse',
        quantidade: 70,
        marca: 'Razer',
        valor: 540,
        descricao: 'MOuse Razer ...',
        codigo: 8
    }]

    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Azul', 'Rosa']
    let listCoresMouseArray = ['Preto', 'Branco', 'Cinza', 'Vermelho', 'Verde', 'Azul', 'Amarelo', 'Rosa', 'Roxo']

    listProdutosJSON.produtos = listProdutosArray;

    //Adcionar cores ao monitor 
    for (let i = 0; i < listProdutosJSON.produtos.length; i++) {
        if (listProdutosJSON.produtos[i].marca === 'Dell') {
            listProdutosJSON.produtos[i].cores = listCoresDellArray;
        } else if (listProdutosJSON.produtos[i].marca === 'LG') {
            listProdutosJSON.produtos[i].cores = listCoresLgArray;
        } else if (listProdutosJSON.produtos[i].nome === 'Teclado') {
            listProdutosJSON.produtos[i].cores = listCoresTecladoArray;
        } else if (listProdutosJSON.produtos[i].nome === 'Mouse') {
            listProdutosJSON.produtos[i].cores = listCoresMouseArray;
        }
    }

    //Arrays para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4k', 'IPS']
    let listModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana', 'Óptico', 'Wireless']

    //Adcionar modelos aos monitores e teclados
    for (let i = 0; i < listProdutosJSON.produtos.length; i++) {
        if (listProdutosJSON.produtos[i].nome === 'Monitor') {
            listProdutosJSON.produtos[i].modelos = listModelosMonitor;
        } else if (listProdutosJSON.produtos[i].nome === 'Teclado') {
            listProdutosJSON.produtos[i].modelos = listModelosMonitor;
        }
    }

    // console.log(`Nome: ${listProdutosJSON.produtos[1].nome}`);
    // console.log(`Marca: ${listProdutosJSON.produtos[1].marca}`);
    // console.log(`Valor: ${listProdutosJSON.produtos[1].valor}`);
    // console.log(`Cor: ${listProdutosJSON.produtos[1].cores[1]}`);

    for (let contador = 0; contador < listProdutosJSON.produtos.length; contador++) {
        console.log('\n')
        console.log(`Nome: ${listProdutosJSON.produtos[contador].nome}`);
        console.log(`Marca: ${listProdutosJSON.produtos[contador].marca}`);
        console.log(`Valor: ${listProdutosJSON.produtos[contador].valor}`);

        console.log(`Cores: `);
        for (let variante = 0; variante < listProdutosJSON.produtos[contador].cores.length; variante++) {
            console.log(` - ${listProdutosJSON.produtos[contador].cores[variante]}`);
        }

        if (listProdutosJSON.produtos[contador]["modelos"] !== undefined) {
            console.log(`Modelos: `);
            for (let variante = 0; variante < listProdutosJSON.produtos[contador].modelos.length; variante++) {
                console.log(` - ${listProdutosJSON.produtos[contador].modelos[variante]}`);
            }
        }

    }

    // for(let contador = 0;contador < listProdutosArray.length;contador++){
    //     console.log(listProdutosJSON.produtos[contador])
    // }

    // console.log(listProdutosJSON)
}

listagemProdutos()
