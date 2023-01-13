const clientes = require('./clientes.json');

function filtrarApartamentosSemCompletmentos(clientes) {
    return clientes.filter(cliente => { //Bool
        return cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento") //filtra clientes que não tem a propriedade "complemento"
    })
}
const filtrados = filtrarApartamentosSemCompletmentos(clientes);
console.log(filtrados);