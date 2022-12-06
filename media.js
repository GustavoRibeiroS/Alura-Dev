const notas = [10, 6, 8, 5.5];
notas.push(10) //adicionando a nota 10 no último Array
notas.pop() //Deletou o último valor (10)
function calcularMedia(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    console.log(`Valor da soma das notas foi: ${soma}`);
    let media = soma/notas.length;
    console.log(`A média do aluno é: ${media}`);

}
calcularMedia(notas)