const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@trab.com",
    telefone: ["1122225555", "11925631458"],
};

cliente.enderecos = [
    {
    rua: "R. Peascoal Freitas",
    numero: 1253,
    apartamento: true,
    complemento: "Apto 52C"
}
]

cliente.enderecos.push({
    rua: "R. Joao Peixoto",
    numero: 222,
    apartamento: false
})


const listaApenasApartamentos = cliente.enderecos.filter(endereco => endereco.apartamento === true) //retornou uma nova lista com uma entrada de um determinado objeto
console.log(listaApenasApartamentos);