function contar() {
    let ini = window.document.querySelector('input#iinicio')
    let fim = window.document.querySelector('input#ifim')
    let passo = window.document.querySelector('input#ipasso')

    let res = document.getElementById('iresultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO]')
    } else {
        res.innerHTML = 'Contando:'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
            
        }
    }
}