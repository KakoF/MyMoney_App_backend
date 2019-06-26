const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((erro, value) => {
        if(erro){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next)=>{
    BillingCycle.aggregate({
        $project: { credit: {$sum: "$credits.value"}, debit: {$sum: "$debits.value"}}
    },{
        $group: {_id: null, credit: {$sum: "$credit"}, debit: {$sum: "debit"}}
    },{
        $project: {_id: 0, credit: 1, debit: 1}
    }, (error, result) =>{
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json(result[0] || {credit: 0, debit: 0})
        }
    })
})

module.exports = BillingCycle