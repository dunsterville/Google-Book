const { GB } = require('../models')

module.exports = app => {

  app.get('/api/books', (req, res) => {
    GB.find()
    .then(books => res.json(books))
    .catch(e => console.error(e))
  })

  app.post('/api/books', (req, res) => {
    GB.create(req.body)
    .then(GB => res.json(GB))
    .catch(e => console.error(e))
  })

  app.delete('/api/books/:id', (req, res) => {
    GB.findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
  })

}