const cliente = {
    nome: "André",
    idade: 33,
    cpf: "11122233344",
    email: "dede@gmailfiq.br"
};
console.log(`O nome do cliente é ${cliente["nome"]} e esta pessoa tem ${cliente["idade"]} anos`);

const chaves = ["nome", "idade", "cpf", "email", "altura"]; //altura undefined - Uma propriedade que não existe no objeto

// chaves.forEach((chave) => {
//     console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
// })

chaves.forEach(chave => { //função é chamada para cada valor da chava (cada nome da chave) e depois para cada propriedade do obj cliente o valor da chave
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
    
});