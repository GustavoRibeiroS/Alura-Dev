const numeros = [100, 200, 300, 400, 500, 600]

//indice é executado com o valor dele (0), a segunda expressão se refere a condição de execuxão (no ex até que chegue no final do arrey, em questão de tamanho/posição), a terceira expressão é executada no final do bloco
for (let i = 0; i < numeros.length; i++) {
       console.log(i);
       console.log(numeros[i]);
}