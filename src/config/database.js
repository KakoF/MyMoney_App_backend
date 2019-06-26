const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//module.exports = mongoose.connect('mongodb://admin:senhaadmin@localhost:27017/admin/mymoney')
module.exports = mongoose.connect('mongodb://localhost/mymoney', {useMongoClient: true,})

//mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatório."