const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Para correção de Bugs
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useMongoClient: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O {VALUE} é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O {VALUE} é maior que o limite mínimo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'." 