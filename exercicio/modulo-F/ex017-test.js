// a chave começa o [0, 1, 2, 3]
let num = [5, 1, 3, 2]

// acrescentar um valo não existente nesse caso a chave [4]
num[4] = 6

// cria um valor novo na ultima chave [5]
num.push(7)

console.log(num);
// para saber quantos valores tem o array ! Não quantas chaves !
num.length

console.log(`nosso array tem ${num.length} valores `);
// colocar o array em modo crescente
num.sort()

console.log(`nosso array em crescente ${num}`);

console.log(`O promeiro valor do vetor é ${num[0]}`);

// A ordem do comandos são MUITO importantes



