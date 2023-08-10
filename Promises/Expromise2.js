let promise1 = new Promise ((resolve, reject) =>{
  setTimeout(()=>{
    resolve('A promise1 foi resolvidas')
  },2000)
})


let promise2 = new Promise ((resolve, reject) =>{
  setTimeout(()=>{
    resolve('A promise2 foi resolvidas')
  },2000)
})

Promise.all([promise1, promise2])
  .then(([resultado1, resultado2]) =>{
    console.log('Toda as promises foram resolvidas')
    console.log(resultado1)
    console.log(resultado2)
  })
  .catch((error) =>{
    console.log('Uma das promises foi rejeitada')
    console.log(error)
  })



//promise2.then((resultado)=> {
//console.log(resultado)
//}).catch((error)=>{
//  console.error(error);
//})
