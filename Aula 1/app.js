//Comenário em linha.
/*
    Comentário
        em
    Bloco
*/

//Permite exibir no terminal uma mensagem.
console.log('Testando o Node.JS');

//Import da biblioteca que permite a entrada de dados via teclado.
var readLine = require('readline');

//Criamos um objeto ou variável que vai ser especialista na entrada de dados via teclado.
var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Callback - Uma função de Callback permite que na própria linha de programação, seja uma variável, um processamento, a chamada de um método possa acontecer um retorno
//de dados automaticamente, sem precisar sair deste processamento.

//Cria uma interação com o usuário para a entrada de dados.
//Após o usuário digitar o conteúdo, o objeto entradaDados permite retornar o conteúdo digitado para ser utilizado.
//Isso acontece através de uma função de Callback.
entradaDados.question('Favor, digitar seu Nome: \n', function(nome){
    console.log('Nome do Usuário: ' + nome + '\nSeja bem vindo, ' + nome + ", ao Node.js!");
});