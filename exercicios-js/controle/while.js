function numAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = numAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a proxima!')

// teste2

function numAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let cont = -0
while (cont != -1){
    cont = numAleatorio(-1, 10)
    console.log(`resp = ${cont}`)
}