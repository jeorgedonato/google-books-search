const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
  },
  authors : [],
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;