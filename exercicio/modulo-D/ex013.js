// como pegar a data e a hora atual 
let agora = new Date()

let hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)

if (hora < 12 && hora >= 5) {
    console.log('Bom Dia!')
} else if (hora <= 18 && hora > 12) {
    console.log('Boa Tarde!')
} else if (hora > 18 && hora < 23) {
    console.log('Boa Noite')
} else {
    console.log('Boa Madrugada')
}