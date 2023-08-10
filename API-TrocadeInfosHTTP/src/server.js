const app = require('express')();

app.listen(3333, (req, res) =>{
  console.log('Servidor rodando!')
})

app.get('/empregados/ti', (req, res) =>{
  res.send(empregados)
})

app.post('/empregados/ti', (req,res) =>{
  let novoFuncionario = {
    nome: req.headers.nome,
    funcao: req.headers.funcao
  }
  empregados.push(novoFuncionario)
})

app.put('/empregados/:id/ti', (req,res) =>{
  for(const empregado of empregados) {
    if (empregado.funcao === req.params.id){
      res.send(empregado)
      return
    }
  }
  res.send('Nao foi possivel encontrar o empregado' + req.params.id) 
})

const empregados = [
  {
    nome:'Mateus',
    profissao: 'Desenvolvedor'
  },
  {
    nome:'Jaq',
    profissao: 'Scrum Master'
  },
  {
    nome:'Bruna',
    profissao: 'Designer'
  }
]