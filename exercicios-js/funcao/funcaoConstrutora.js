function carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const onix = new carro
onix.acelerar()
onix.acelerar()
console.log(onix.getVelocidadeAtual())

const mustang = new carro(350, 20)
mustang.acelerar()
mustang.acelerar()
mustang.acelerar()
console.log(mustang.getVelocidadeAtual())