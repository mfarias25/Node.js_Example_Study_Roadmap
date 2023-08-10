var array = [1, 2, 3, 4, 5]

console.log('E um array?' + Array.isArray(array))
array[5]= 19
array.length = 10  //Definindo o tamanho de array com .length
array[15] = 'banana'
console.log('Array completo:' + array)
console.log('Elemento de indice 3 do array:' + array[3])
console.log('Tamanho de array:' + array.length)
