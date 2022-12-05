const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('r'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola ' .concat (escola). concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/,'e'))

console.log('Ana,Maria,Pedro'.split(','))