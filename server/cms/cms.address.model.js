const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: { type: String, required: true },
    street: { type: String, required: true },
    zip: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: {type: String, required: true}
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Address', schema)