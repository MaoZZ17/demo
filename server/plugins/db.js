module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/demo-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}