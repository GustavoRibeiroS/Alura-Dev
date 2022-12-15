const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0;

for (const nota of notas) {
    somaNotas += nota;    
}

console.log(somaNotas);

let media = somaNotas/notas.length;
    console.log(`A média do aluno é: ${media}`);