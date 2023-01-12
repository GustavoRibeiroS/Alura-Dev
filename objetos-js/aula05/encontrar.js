const clientes = require('./clientes.json');
// console.log(clientes);

function encontrar(lista, chave, valor) {
    return lista.find(item => item[chave].includes(valor)) //find = informa um ítem (chave) e se o item condizer com o que possui na lista ele retorna o valor
}

const encontrado = encontrar(clientes, "nome", "Kirby")

const encontrado2 = encontrar(clientes, "telefone", "19918820860")

console.log(encontrado);
console.log(encontrado2);