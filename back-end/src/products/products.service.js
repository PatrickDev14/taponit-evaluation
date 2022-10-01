const knex = require("../db/connection");

// GET /:productId
function read(product_id) {
  return knex("products")
    .select("*")
    .where({ product_id })
    .first();
}

// GET all products
function list() {
  return knex("products");
}

module.exports = {
  read,
  list,
}