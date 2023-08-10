var igualdadeAmpla = '0' == new String("0")
var igualdadeEstrita = '0' === new String("0")

console.log(typeof(new String("0")))
console.log(typeof('0'))
console.log('Igualdade Ampla:' + igualdadeAmpla)
console.log('Igualdade Estrita:' + igualdadeEstrita)