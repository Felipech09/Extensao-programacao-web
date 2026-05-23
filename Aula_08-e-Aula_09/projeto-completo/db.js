const mysql = require("mysql2")
const { userInfo } = require('os')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'catolica',
    database: 'userdb',
    port: '3307'
})

db.connect(err => {
    if (err) throw err
    console.log('conectando ao banco de dados')
})

module.exports = db