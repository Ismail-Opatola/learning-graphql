const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
});
// mongodb auto generate id so no need to create it in the schema

module.exports = mongoose.model("Author",authorSchema);