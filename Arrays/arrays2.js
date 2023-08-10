const numeros = [ 2, 4, 6, 8, 10, 15, 20, 4 ];

// Métodos de acesso:
// .includes() Verifica se a alguma coisa dentro do array, por ex queria saber se tem o numero [15]. 
// .indexOf() Verifica se a dentro do array a partir de primeiro elemento ex: numeros.indexOf(4). FronIndex: numeros.indexOf(4, 2)
// .slice() Conta a partir do valor inicial ex: numeros.slice(2) = [ 4, 6, 8, 10, 15, 20, 4 ] ou numeros.slice(2, 5) = [8,10,15,20]
console.log('Usando includes(): ' + numeros.includes(4, 3));
console.log('Usando o indexOf(): ' + numeros.indexOf(4, 2));
console.log('Usando o slice(): ' + numeros.slice(2, 5));

// Métodos de iteração
// .filter() percore o array e se para os elemento que forem conforme o valor do parametro da funcao ex: numeros.filter((element) => element > 6) = 8,10,15,20
// .map() passa em todo o array e retorna com os elementos processados.
// .reduce() percore o array e acumula conforme difinido a regra.

console.log('Usando .filter(): ' + numeros.filter((element) => element > 6));

console.log('Usando .map(): ' + numeros.map((element) => {
  return element * 10;
}));

console.log('Total de todos os itens usando .reduce(): ' + numeros.reduce((anterior, atual) => {
  return anterior + atual;
}, 100));