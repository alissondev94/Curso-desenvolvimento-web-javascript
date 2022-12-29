// Função em JS é First-Class Object (Citizens)
// Higher-order function

//  criar de forma literal
function fun1() { }


// Armazena em uma variável
const fun2 = function () { }


// Armazenar em um array
const array = [function (a, b) { return a + b}]
console.log(array[0](2, 3))

let array2 = [function(fun1, fun2){ return fun1 * fun2}]
console.log(array2[0](3, 3))


// Armazenar em um atributo objeto
const obj = {}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())



// Passar função com paramento
function fun3(fun) {
    fun()
}
fun3(function () {console.log('Executando...')})



// uma função pode retornar ou conter uma função criada dentro dela
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma (2, 3)(5)

const soma2 = soma(3, 2)
soma2(5)