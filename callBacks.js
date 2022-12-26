const nomes = ["Arnaldo", "Pedrinho", "Cesé"];
const nomesB = ["Felipe", "Dimas", "Rodolfo"];

nomes.forEach((nome) => { //callBack com arrow function
    console.log(nome);
})


function imprimeNomes(nome) { //callBack com função chamada de forma externa
    console.log(nome);
}

nomesB.forEach(imprimeNomes)

const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15