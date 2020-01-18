const { model, Schema } = require('mongoose')

const GB = require('./Books.js')(model, Schema)

module.exports = { GB }