const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@trab.com",
    telefone: ["1122225555", "11925631458"],
};

// cliente.enderecos = [
//     {
//     rua: "R. Pascoal Freitas",
//     numero: 1253,
//     apartamento: true,
//     complemento: "Apto 52C"
// }
// ]

const chaveObjeto = Object.keys(cliente);//retorna um array com todas as chaves utilizadas pelo cliente
console.log(chaveObjeto);

if (!chaveObjeto.includes("enderecos")) {
    console.error("É necessário ter um endereço cadastrado");   
}