const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        const errors = parseErros(bundle.errors) // Trata o Erro, extraindo as Mensagens em Strings
        res.status(500).json({errors}) // Retorna a lista de Strings em Json
    } else {
        next() // Vai para o próximo Middleware
    }
}

const parseErros = (nodeRestfulErrors) => {
    const errors = []
        _.forIn(nodeRestfulErrors, error => errors.push(error.message)) // Extrai a mensagem dos Objetos Year e Month
        return errors
}