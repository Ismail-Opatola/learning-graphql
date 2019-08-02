const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});
// mongodb auto generate id so no need to create it in the schema

module.exports = mongoose.model("Book", bookSchema);
