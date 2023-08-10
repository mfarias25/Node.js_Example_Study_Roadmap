const funcao = require('./callback')

console.log('Comecando a execucao do codigo')
funcao(function(string, numero){
  console.log(string)
  numero += 123
  console.log(numero)
})

console.log('Fim do codigo')