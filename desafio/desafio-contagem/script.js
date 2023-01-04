function contar() {
    var ini = window.document.querySelector('input#iinicio')
    var fim = window.document.querySelector('input#ifim')
    var passo = window.document.querySelector('input#ipasso')

    var res = window.document.getElementById('iresultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO]')
    } else {
        res.innerHTML = 'Contando:'

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
            
        }
    }
}