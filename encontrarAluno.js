const alunos = ["Savio", "Otavio", "Brendo", "Raimundo"];
const medias = [10, 8, 7.5, 9];

const listaMediaAlunos = [alunos, medias];

function buscarAluno(aluno) {
    if (listaMediaAlunos[0].includes(aluno)) { //Verifica se inclue o nome do aluno passado no parâmetro

        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];

        const[pAlunos, nMedias] = listaMediaAlunos;

        const indiceAluno =  pAlunos.indexOf(aluno) //indexOf retorna o índice (posição) do aluno na "listaMediaAlunos" dentro de "alunos"
        console.log(`Obs. Posição do aluno no array: ${indiceAluno}`);

        const mediaAluno = nMedias[indiceAluno]
        console.log(`O aluno: ${aluno} está cadastrado, e sua média é: ${mediaAluno}`);

    } else {
        console.log("Aluno não cadastrado");
    }

}

buscarAluno("Brendo") //Parâmetro