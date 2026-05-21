const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//disponibilizar os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

//criar a cpnexão com o banco de dados
const db = require('./db')

app.get('/', (req, res) => {
    //res.send('Hellho world')
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})