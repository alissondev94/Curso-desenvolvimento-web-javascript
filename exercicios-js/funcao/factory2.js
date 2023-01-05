function criarProduto (nome, preco, desconto = 0.1){
    return{
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Celular', 1322.70))
console.log(criarProduto('TV', 3150.00))