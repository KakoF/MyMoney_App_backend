const restfull = require('node-restful')
const mongoose = restfull.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required:[true, 'Informe o nome para identificar o crédito'] },
    value: { type: Number, min:[0, 'O valor informado é meno que o limite mínimo'], required: [true, 'Informe o valor'] }
}) 
const debitSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome para identificar o débito'] },
    value: { type: Number, min:[0, 'O valor informado é meno que o limite mínimo'], required: [true, 'Informe o valor'] },
    status: { type: String, required: false, uppercase: true,
        enum:['PAGO','PENDENTE','AGENDADO'] 
    }
}) 

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome'] },
    month: { type: Number, min:[1, 'O valor informado é meno que o limite mínimo'], max:[12, 'O valor informado é meno que o limite máximo'], required: [true, 'Informe o mês'] },
    year: { type: Number, min: [1970, 'O valor informado é meno que o limite mínimo'], max: [2100, 'O valor informado é meno que o limite maximo'], required: [true, 'Informe o ano'] },
    credits: [creditSchema],
    debits: [debitSchema]
})


module.exports = restfull.model('BillingCycle', billingCycleSchema)