// fatorial 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    var fat = 1

    for (let index = n; index > 1; index--) {
        fat *= index
        
    }
    return fat

}

console.log(fatorial(5));

// fatorial de manira recursiva

function fatori(x) {
    if (x == 1) {
        return 1
    } else {
        return x * fatori(x-1)
    }
}

console.log(fatori(5));