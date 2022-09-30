const knex = require("../db/connection");

function list() {
  return knex("products");
}

module.exports = {
  list,
}