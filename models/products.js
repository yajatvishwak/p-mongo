const mongoose = require("mongoose");
//schema is a blueprint of the collection
//once schema is made the model can be constructed using
// the defined properties of the schema

/*In mongoose, a schema represents the structure of a
particular document, either completely or just a portion
of the document. It's a way to express expected properties
and values as well as constraints and indexes.
A model defines a programming interface for interacting
with the database (read, insert, update, etc).
So a schema answers "what will the data in this collection
look like?" and a model provides functionality like
"Are there any records matching this query?" or
"Add a new document to the collection".
*/

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});
module.exports = mongoose.model("productcollection", productSchema);
// productSchema is the the name of the collection
// if it doesnt exist, mongoose makes the the collection
