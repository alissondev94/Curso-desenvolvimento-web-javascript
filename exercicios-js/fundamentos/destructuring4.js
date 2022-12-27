function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([100, 10]))

console.log(rand([10])) // passando somente o mínimo ele busca o máximo que é 1000

console.log(rand([, 999])) // passando o máximo , assumira que o mínimo e 0

console.log(rand([])) // busca automática entre 0 e 100 definindo a cima