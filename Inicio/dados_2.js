let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(`preço com desconto R$${precoComDesconto}`);

let produto = 'caderno';
let categoria = 'papelaria';
console.log(
    "Produto: " + produto
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Desconto: " + desconto
    + ", Total a Pagar: " + precoComDesconto
);