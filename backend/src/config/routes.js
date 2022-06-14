const express = require('express');

module.exports = function(server){

    // definindo a url de todas as rotas
    const router = express.Router();
    server.use('/api', router);


    // rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCyleService');
    BillingCycle.register(router, '/billingCycles')
}