function tratarErroElancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)