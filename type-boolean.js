const num1 = 5;
const num2 = 3;
const num3 = 5;

console.log(num1 === num2);
console.log(num1 === num3);

const tx1 = "Alunos";
const tx2 = "Batata";

console.log(tx1 === tx2);
console.log(tx1.length === tx2.length);

let usuarioConectado = false;
console.log(Number(usuarioConectado)); //conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // conversão de true (verdadeiro) para o número 1.