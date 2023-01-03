const pessoa = {
    saudacao: 'Bom dia!',
    saudacao2: 'bem vindo',
    falar(){
        console.log(this.saudacao, this.saudacao2)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falar2 = pessoa.falar.bind(pessoa)

falar2()