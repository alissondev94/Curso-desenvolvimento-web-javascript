function numAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let resp = 0

do {
    resp = numAleatorio(-1, 20)
    console.log(`Opção escolhida foi ${resp} `)
} while (resp != -1);

console.log('Fim!')