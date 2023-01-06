// introdução de objeto {}

let amigo = {
nome: 'Carlos', 
Sexo: 'M',
peso: 80.6,
engordar(p=0) {
    console.log('engordou')
// this refere ao objeto
    this.peso += p
}
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);