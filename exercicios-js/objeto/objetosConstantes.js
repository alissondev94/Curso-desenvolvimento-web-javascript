// pessoa aponta pra um endereço que aponta para o objeto
// pessoa -> 123 -> {...}
const pessoa = {nome: 'joão'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {... }
// pessoa = {nome : 'Ana'} por pessoa ser uma constante nao pode alterar o objeto diretamente

Object.freeze(pessoa) // congela o objeto nao deixando ser alterado!

pessoa.nome = 'Maria'
console.log(pessoa.nome) 

const pessoaConstante = Object.freeze({nome: 'Alisson'})
console.log(pessoaConstante)