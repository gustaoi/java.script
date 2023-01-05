function tabuada() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')

    if (num.value.length == 0) {
        window.alert('Por favor, Digite um número')
    } else {
        let n = Number(num.value)

        let i = 1
        
        tab.innerHTML = ''
        while (i <= 10) {
    // cria elemento option porque no select usa option
            let item = document.createElement('option')

            item.text = `${n} x ${i} = ${n*i}`

            item.value = `tab${i}`

            tab.appendChild(item)

            i++
        }
    }
}