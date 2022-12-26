const notas = [10, 9.5, 8, 6]

const notasAtualizadas = notas.map((nota) =>{ //Método útil para reescrever array todo
    return nota + 1 >= 10 ? 10 : nota + 1;
});
console.log(notasAtualizadas);