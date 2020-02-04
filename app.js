const express = require("express");
const bodyParser = require("body-parser");
const mongooseController = require("./mongoose");
const app = express();

app.use(bodyParser.json());

app.post("/products", mongooseController.createProducts);

app.get("/products", mongooseController.getProducts);

app.listen(3000);
