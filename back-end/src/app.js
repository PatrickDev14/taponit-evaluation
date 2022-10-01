const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const app = express();
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const productsRouter = require("./products/products.router");

app.use(cors());
app.use(express.json());

app.use("/", productsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;