// novo recurso do ES2015

const pessoa = {
    nome: 'Alisson',
    idade: 28,
    endereco: {
        lougradouro: 'rua Juscelino Kubsti',
        numero: 999
    }
}

console.log(pessoa)

const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i,} = pessoa
console.log(n,i)

const { endereco: {lougradouro, numero, cep}} = pessoa
console.log(lougradouro, numero,)