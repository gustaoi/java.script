// Condições Multiplas Com Switch

let agora = new Date()
let diasem = agora.getDay()
/* Como funciona o (getDay)
    
    0 = Domingo
    1 = Segunda
    2 = Terça 
    3 = Quarta 
    4 = Quinta 
    5 = sexta 
    6 = Sábado
*/

console.log(diasem)

switch(diasem) {
    case 0:
        console.log('Domingo')
        break // Obrigatório o uso do 'break'
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break 
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERR0')
        break
}