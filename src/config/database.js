const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://admin:senhaadmin@localhost:27017/admin/mymoney')