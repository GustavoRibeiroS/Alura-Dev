const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0;

notas.forEach(function (nota, indice) {
    somaNotas+= nota;
    console.log(indice); //Posição de leitura do array
})

console.log(somaNotas);

let media = somaNotas/notas.length;
    console.log(`A média do aluno é: ${media}`);