const { GB } = require('../models')

module.exports = app => {

  app.get('/api/books', (req, res) => {
    GB.find()
    .then(books => res.json(books))
    .catch(e => console.error(e))
  })
}