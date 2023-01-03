function carregar() {
    let msg = window.document.querySelector('div#mensagem')

    let img = window.document.getElementById('imagem')

    let data = new Date()
    //let hora = data.getHours()
let hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`

    let corpo = window.document.body

    if (hora >= 0 && hora < 12) {
        // dia
        img.src = 'fotos/dia.jpg'

        corpo.style.background = '#CBD7D2'
    } else if (hora >= 12 && hora < 18 ) {
        // tarde
        img.src = 'fotos/tarde.jpg'

        corpo.style.background = '#F3B98F'
    } else {
        // noite
        img.src = 'fotos/noite.jpg'

        corpo.style.background = '#050524'

        corpo.style.color = 'white'
        msg.style.color = 'black'

    }
}

