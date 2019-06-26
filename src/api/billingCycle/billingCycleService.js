const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle