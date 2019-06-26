const express = require('express')


module.exports = function(server){

    // URL BASE PARA TODAS AS ROTAS
    const router = express.Router()
    server.use('/api', router)

    // ROTAS RELACIONADAS AO CICLO DE PAGAMENTO
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}