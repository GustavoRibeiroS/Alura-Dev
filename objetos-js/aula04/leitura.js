const dados = require("./cliente.json");
// console.log(dados);
// console.log(typeof dados);
// console.log(dados.endereco);

const clienteEmString = JSON.stringify(dados) //"Strinficar"
console.log(clienteEmString);

console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString); //Transformar cliente em String
console.log(objetoCliente);
console.log(typeof objetoCliente);