const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@trab.com",
    telefone: ["1122225555", "11925631458"],
};

cliente.enderecos = [
    {
    rua: "R. Pascoal Freitas",
    numero: 1253,
    apartamento: true,
    complemento: "Apto 52C"
}
]

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone)

// const encomenda = {
//     detinatario: cliente.nome,
//     rua: cliente.enderecos[0].rua,
//     numero: cliente.enderecos[0].numero,
//     complemento: cliente.enderecos[0].complemento
// }

const encomenda = { //Método para compor o objeto de forma mais simples
        detinatario: cliente.nome,
        ...cliente.enderecos[0] 
    }

console.log(encomenda);