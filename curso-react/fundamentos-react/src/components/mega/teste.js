console.log("teste")

function gerarNumeros(qtde, max) {
    var num, sugestao = false, result = []

    for (let i = 0; i < qtde; i++) {
        sugestao = false

        while (!sugestao) {
            num = Math.floor(Math.random() * max) + 1;
            sugestao = !(result.includes(num))
        }
        result.push(num)

    }

    result = result.sort((a, b) => a - b)

    return result;
}


var arrays = gerarNumeros(7, 7)

console.log(arrays)

const lis = arrays.map(array => {

    console.log(array)
})
