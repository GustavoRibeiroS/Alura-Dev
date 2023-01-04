const alunos = ["Arnaldo", "Pedrinho", "Daniel", "Cesé"]
const media = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((_, indice)=> { //retorna sempre verdadeiro ou falso
    return media[indice] < 7 ; //True or false, retornando medias maiores que 7
})

console.log(reprovados);