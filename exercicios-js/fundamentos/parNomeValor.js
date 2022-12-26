// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        lougradouro: 'Rua legal',
        numero: 999,
        bloco: 03,
        apartamento: 304
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)