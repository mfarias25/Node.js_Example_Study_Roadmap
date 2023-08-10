async function main() {
  try{
  if(await getResultado(5) >10) {
      console.log('O valor recebido e maior que 10')
    if(await getResultado(3) <10) {
      console.log('O valor e menor que 10')
    }
  }

  } catch(err) {
    console.log('Deu erro')
    console.log(err)
  }

  


  //SEM SER ASYNC
  /*getResultado(5)
  .then((resultado) =>{
    console.log('O valor que retornou e maior que 10')
    getResultado(3)
    .then((result) =>{
      console.log('O valor e menor que 10')
    }).catch ((erro) =>{
      console.log(erro)
      console.log('Deu erro')
    })
  }).catch((err) =>{
    console.log(err)
    console.log('Deu erro')
  })*/
}
main()

function getResultado (parametro) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
     reject (parametro * 2.5) 
    }, 3000)
  })
}