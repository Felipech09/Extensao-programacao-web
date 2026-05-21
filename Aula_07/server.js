const express = require('express')
const app = express()
const port = 3000

// ver a url sendo recebida do formulário
app.use(express.urlencoded({extended: true}))

// informar que os arquivos estáticos (html, css, js e img) estão na pasta public
app.use(express.static('public'))

// rotas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html') //disponibilizar um arquivo
})

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/public/sobre.html')
  })

  app.post('/contato', (req, res) => {
    const {nome, email} = req.body
    res.send(`Dados recebidos: ${nome}; ${email}`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
