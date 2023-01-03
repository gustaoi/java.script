function verificar() {
    let data = new Date()
    let ano = data.getFullYear()

    let iano = document.querySelector('input#iano')
    
    let res = document.querySelector('div#resultado')

    if (iano.value.length == 0 || iano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let isexo = document.getElementsByName('sexo')
        let idade = ano - Number(iano.value)

        let genero = ''

// Inserir uma imagem via Java Script
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (isexo[0].checked) {
            genero = 'um Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotos/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotos/jovem-M.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotos/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotos/idoso.png')
            }

        } else {
            genero = 'uma Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotos/menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotos/jovem-F.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotos/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotos/idosa.png')
            }
        }

        
        res.innerHTML = `Você é ${genero} de ${idade} anos de idade`

//adicionado um elemento
        res.appendChild(img)
        
    }
}