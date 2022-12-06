const notas = [10, 6, 8];
notas.push(7) //adicionando a nota 7
function calcularMedia(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    console.log(`Valor da soma da media foi: ${soma}`);
    let media = soma/notas.length;
    console.log(`A média do aluno é: ${media}`);

}
calcularMedia(notas)