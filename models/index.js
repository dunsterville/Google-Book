const { model, Schema } = require('mongoose')

const GB = require('./Books.js.js')(model, Schema)

module.exports = { GB }