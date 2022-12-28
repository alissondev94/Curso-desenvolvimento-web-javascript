const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log('Nota:', notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    sexo: 'F'
}
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}