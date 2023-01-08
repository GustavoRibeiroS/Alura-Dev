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

for (let chave in cliente) {
    let tipo = typeof cliente[chave]; //verifica o tipo da variável
    if (tipo !== "object" && tipo !== "function") { //se for um objeto ou função não retorna - Retorna apenas o necessário para o relatório
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
    }
}