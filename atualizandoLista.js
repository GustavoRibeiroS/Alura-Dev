const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1,2, "Rodrigo")// Primeiro parâmetro - Índice do elemento que quer tirar, Segundo parâmetro - Quantidade de elementos que quer tirar a partir do índice informado, Terceniro parâmetro - O que colocar no local
console.log(nomes); //Retirou "Ana" e "Caio" e adicionou o Rodrigo no lugar

nomes.push("Paolo")
console.log(nomes);
