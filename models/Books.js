module.exports = (model, Schema) => {
  const GoogleBooks = new Schema({
    title: String,
    author: String,
    description: String,
    link: String,
    image: String
  })
  return model('GoogleBooks', GoogleBooks)
}
