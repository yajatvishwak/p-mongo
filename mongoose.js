const mongoose = require("mongoose");
const Product = require("./models/products"); // this is a model which uses the mongoose schema, and also points to collection in the database
// connecting using mongoose, its async and returns a promise
// the url parameter is written in the form <connecting-server-string>/<database-name>
// if database doesnt exist, this creates a database and then connects to it
mongoose
  .connect("mongodb://127.0.0.1:27017/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    //then is called after the promise is fulfiled
    console.log("Connected to database");
  })
  .catch(() => {
    // if the promise fails, error is caught and reported
    console.log("Connection to database failed");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price
  });
  const result = await createdProduct.save();
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  //exec functions converts a sync function to async and
  // returns a promise which would normally wouldnt return a promise
  // Product here is a model, it points to the collection in the actual database
  res.json(products);
};

exports.createProducts = createProduct;
exports.getProducts = getProducts;
