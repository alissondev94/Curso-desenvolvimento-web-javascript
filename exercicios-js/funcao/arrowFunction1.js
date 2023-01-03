let dobro = function(a) {
    return 2 * a
}
console.log(dobro(25))


dobro = (a) => {
    return 2 * a
}
console.log(dobro(4))


dobro = a => 2 * a // nessa arrow function o return ja está implícito
console.log(dobro(Math.PI))


let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //contem param uso de () obrigatório no console.log
console.log(ola())