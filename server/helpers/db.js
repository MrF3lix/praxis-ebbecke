const config = require('../config.json')
const mongoose = require('mongoose')

mongoose.connect(process.emitWarning.MONGODB_URI || config.connectionString)
mongoose.Promise = global.Promise

module.exports = {
    User: require('../users/user.model.js'),
    Article: require('../cms/cms.article.model.js'),
    Team: require('../cms/cms.team.model.js'),
    Time: require('../cms/cms.times.model.js'),
    Address: require('../cms/cms.address.model.js')
}