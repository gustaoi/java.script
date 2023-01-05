//demonstrando valores de um array GRANDE

let num = [7, 5, 3, 14, 6, 8, 9, 19, 12, 34, 28, 67, 42, 90, 4, 500, 65, 100]

for (let index = 0; index < num.length; index++) {
    const posicao = num[index];

    console.log(`na chave ${index} tem o valor ${posicao}`);
    
}

// Simplificando (for) para arrays (variáveis composta)

for(let index in num) {
    console.log(`${num[index]}`);
}

// Buscar um valor dentro de uma array ! Pela posição !
num.indexOf(28)

console.log(`o valor 28 está na posição ${num.indexOf(28)}`);

//valor não existente na array ele retorna (-1)
console.log(`o valor 16 que não existe retorna ${num.indexOf(16)}`);