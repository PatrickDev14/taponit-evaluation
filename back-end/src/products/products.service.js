const knex = require("../db/connection");

// GET /:productId
function read(product_id) {
  return knex("products")
    .select("*")
    .where({ product_id })
    .first();
}

// PATCH /:productId
function updateLikes(product_id, likes) {
  return knex("products")
    .where({ product_id })
    .update({ likes })    
    .then((updatedRecords) => updatedRecords[0]);
}

// GET all products
function list() {
  return knex("products")
    .orderBy("product_id");
}

module.exports = {
  read,
  updateLikes,
  list,
}