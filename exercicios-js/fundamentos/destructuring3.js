function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 100, min: 10}
console.log(rand(obj))

console.log(rand({min: 200})) // pegando a minima ele pega a maxima global

console.log(rand({})) // objeto vazio pega os parametos desctructuring global