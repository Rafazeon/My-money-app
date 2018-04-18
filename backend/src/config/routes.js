const express = require('express')

module.exports = function(server) {
    // Definir a url base de todas as Rotas
    const router = express.Router()
    server.use('/api', router) // Sempre que começar com /api passa o Router

    // Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles') // Registra todos os webServices dentro do billingCycles
}