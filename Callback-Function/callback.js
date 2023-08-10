module.exports = function (callback) {
  console.log('Executando funcao sincrona')
  setTimeout(()=>{
    callback('Callback Executado', 123)
  }, 5000)
  

}