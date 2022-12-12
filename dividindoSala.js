const alunos=[ 
"João",
"Juliana",
"Ana",
"Caio",
"Lara",
"Marjorie",
"Guilherme",
"Aline",
"Fabiana",
"Andre",
"Carlos",
"Paulo",
"Bia",
"Vivian",
"Isabela",
"Vinícius",
"Renan",
"Renata",
"Daisy",
"Camilo"
];

const sala1 = alunos.slice(0,alunos.length/2); // ou - const sala1 = alunos.slice(0,10); - Não altera o array, cria um novo, imprimindo da posição 0 à 9
const sala2 = alunos.slice(alunos.length/2) //Da posição informada até o final
console.log(sala1);
console.log(sala2);
