const notas = [7, 7, 8, 9];

const novasNotas = [5,...notas]; //[... ] pega o conteúdo do array e adiciona a novo array, sem modificar o original
novasNotas.push(10);

console.log(`Notas novas: ${novasNotas}`);
console.log(`Notas Originais: ${notas}`);