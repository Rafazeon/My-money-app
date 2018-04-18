const port = process.env.PORT || 3003

const bodyParser = require('body-parser')
const express = require('express') // Sempre trás uma instância única independente do Arquivo
const server = express() // Sempre retorna um novo Servidor
const allowCors = require('./cors') // Habilita o Cors
const queryParser = require('express-query-int') // Para padronizar a busca de um elemento por skip e limit

server.use(bodyParser.urlencoded({ extended : true })) // Quando um formulário é submetido, extended para receber mais dados
server.use(bodyParser.json())
server.use(allowCors) // Chama o Cors
server.use(queryParser()) // Converte String para Número

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server