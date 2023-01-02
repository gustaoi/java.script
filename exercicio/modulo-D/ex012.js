let idade = 70

console.log(`Você tem ${idade} anos. `)

//else condiçao composta / somente 2 opções

//else if Condição aninhadas / mais de 2 opções

if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18 || idade > 65) {
    console.log(`Voto Opcional`)
} else {
    console.log(`Voto Obrigatorio`)
}