function pessoa (nome) {
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new pessoa('Bruno')
p2.falar()
