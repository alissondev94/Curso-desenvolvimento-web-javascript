function soma() {
     let soma = 0
     for (s in arguments) {
        soma += arguments[s]
     }
     return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(4, 5, 7.2, ' teste'))