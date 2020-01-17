module.exports = (model, Schema) => {
  const GoogleBooks = new Schema({
    title: String,
    author: String,
    description: String,
    link: String,
    image: {
      data: Buffer, contentType: String
    }
  })
}

return models('googlebooks', GoogleBooks)