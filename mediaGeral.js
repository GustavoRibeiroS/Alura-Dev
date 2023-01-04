const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasSala) {
    const somaDasNotas = notasSala.reduce((acumulador, nota) => { //acumulador recebe o valor 0 e na nota é atribuido os valores das salas que serão passadas como parâmetro
        return acumulador + nota;
    },0) //Da mesma forma que se coloca uma variável para somar o array, ao 0 é atribuido está função (acumulador).
    console.log(`Soma notas: ${somaDasNotas}`);
    
    const media = somaDasNotas / notasSala.length;
    return media;
}
console.log(`A média da sala JS é:${calculaMedia(salaJS)}`);
console.log(`A média da sala Java é:${calculaMedia(salaJava)}`);
console.log(`A média da sala Python é:${calculaMedia(salaPython)}`);