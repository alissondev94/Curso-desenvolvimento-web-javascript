console.log('01)', '1' == 1) // iguais
console.log('02)', '2' === 2) // estritamente iguais
console.log('03)', '3' != 3) // diferente
console.log('04)', '4' !== 4) // estritamente diferente

console.log('05)', 3 < 2 )
console.log('06)', 3 > 2 )
console.log('07)', 3 <= 2 )
console.log('08)', 3 >= 2 )

const data1 = new Date(0) // 0 referencia a marco zero de uma certa data, varias linguagem usam como referencia
const data2 = new Date(0)
console.log('09)', data1 === data2)
console.log('10)', data1 == data2)
console.log('11)', data1.getTime() === data2.getTime())
console.log('12)', data1.getTime() == data2.getTime())

console.log('13)', undefined == null)
console.log('14)', undefined === null)