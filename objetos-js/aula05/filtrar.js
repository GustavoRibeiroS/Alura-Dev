const clientes = require('./clientes.json');

function filtrarApartamentosCompletmentos(Clientes) {
    return clientes.filter(cliente => {
        return cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento") //filtra clientes que não tem a propriedade "complemento"
    })
}
const filtrados = filtrarApartamentosCompletmentos(clientes);
console.log(filtrados);