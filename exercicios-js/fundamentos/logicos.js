function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // Exemplo do Ou
    const comprarTv50  = trabalho1 && trabalho2 // Exemplo do I
    const comprarTv32 = trabalho1 != trabalho2 // método adaptado do ( OU EXCLUSIVO utilizando sinal de diferente )
     //const comprarTv32 = !! (trabalho1 ^ trabalho2) // operador bitwise xor = ( OU Exclusivo)
    const manterSaudavel = !comprarSorvete // exemplo da Negação logica

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))