const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://admin:senhaadmin@localhost:27017/admin/mymoney')

//mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatório."