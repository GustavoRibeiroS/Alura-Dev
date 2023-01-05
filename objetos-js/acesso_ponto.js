const cliente = {
    nome: "André",
    idade: 33,
    cpf: "11122233344",
    email: "dede@gmailfiq.br"
};
console.log(`O nome do cliente é ${cliente.nome} e esta pessoa tem ${cliente.idade} anos`);
console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0,3)}`);