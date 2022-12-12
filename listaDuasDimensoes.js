const alunos = ["Savio", "Otavio", "Brendo", "Raimundo"];
const medias = [10, 8, 7.5, 9];

const listaMediaAlunos = [alunos, medias];

console.log(
`O aluno da posição 1 da lista de alunos é: ${listaMediaAlunos[0][1]}. 
A nota deste aluno é: ${listaMediaAlunos[1][1]}`
); //Informa o que quer solicitar da listaMediaAlunos (ex 1 - No caso quero saber o Alunos[0]) e depois a posição quer quer acessar da lista Alunos