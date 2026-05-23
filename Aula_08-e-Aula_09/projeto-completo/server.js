const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//disponibilizar os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

//criar a cpnexão com o banco de dados
const db = require('./db')

// rota principal
app.get('/', (req, res) => {
    //res.send('Hellho world')
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// puxar as rotas presentes em "api.js" e anexar no arquivo principal
const apiRoutes = require('./routes/api')
app.use(express.json()) // interpretar o item no fformato JSON
app.use('/api/users', apiRoutes); //caminho das rotas criadas

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})