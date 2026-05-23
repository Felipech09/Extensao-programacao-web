// rotas principais do usuário
const express = require('express')

//modularizar as rotas
const router = express.Router()

// conectar ao banco
const db = require('../db')

//CRUD dos usuários
//CREATE: POST
router.post('/', (req, res)=>{
    //campos do formulário(nome, email)
    const {nome, email} = req.body // corpo da requisição feita pelo usuário

    // inserir os itens no banco 
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
        if (err) return res.status(500).send(err)
        res.status(201).json({id: result.insertId, nome, email})
    })
})

//READ: GET
router.get('/', (req, res) =>{
    db.query('SELECT * FROM users', (err, result) =>{
        if (err) return res.status(500).send(err)
        res.json(result)
    })
})

//UPDATE: PUT
router.put('/:id', (req, res) =>{
    const {nome, email} = req.body
    const{id} = req.params

    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) =>{
        if (err) return res.status(500).send(err)
        res.json(id, nome, email)
    })
})

//DELETE: DELETE: /api/users/:id
router.delete('/:id', (req, res) =>{
    const {id} = req.params
    db.query('DELETE FROM users where id = ?', [id], (err) =>{
        if (err) return res.status(500).send(err)
        res.sendStatus(204)
    }) 
})

module.exports = router