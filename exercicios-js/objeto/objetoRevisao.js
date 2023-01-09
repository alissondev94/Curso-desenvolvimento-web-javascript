// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            lougradouro: 'rua juscelino kubtschek 999',
            cep: 41345290,
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42,
    }, {
        nome: 'João',
        idade: 28,
    }],
    calcularValorSeguro: function() {
        // ... 
    }
}

console.log(carro)

carro.proprietario.endereco.numero = 1000