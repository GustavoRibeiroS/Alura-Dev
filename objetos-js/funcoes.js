const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@trab.com",
    telefone: ["1122225555", "11925631458"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(20)