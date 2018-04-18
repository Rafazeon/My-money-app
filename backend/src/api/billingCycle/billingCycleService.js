const BillingCycle = require('./billingCycle') // Mesma Pasta
const errorHandler = require('../common/errorHandler') // Errors Personalizados

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({
    new: true, // Sempre retorna o Objeto Novo
    runValidators: true // Executa a validação também ao fazer o Put
})
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => { // Registra a rota no Routes
    BillingCycle.count((error, value) => { // Pega a quantidade de elementos da Tabela, e seu Value
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) =>  {
    BillingCycle.aggregate({ // Função que recebe vários parâmetros
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} // Sum: Soma do valor dos Créditos e Débito Apenas 
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} // Pega tudo e soma o Null, e trás todos os valores em um Único, $credit vem do project
    }, {
        $project: {_id: 0, credit: 1, debt: 1} // Extrai o ID para mostrar apenas o resultado do Crédito e Débito
    }, (error, result) => {
            if(error) {
                res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0 , debt: 0 }) // result[0], Tem apenas um único Registro, senão retorna o Crédito e Débito Zerado
        }
    })
})

module.exports = BillingCycle