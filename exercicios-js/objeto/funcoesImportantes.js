const pessoa = {
    nome: 'Rebeca',
    idade: 19,
    peso: 57
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty()