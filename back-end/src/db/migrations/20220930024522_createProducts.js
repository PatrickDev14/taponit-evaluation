exports.up = function(knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("product_id").primary();
    table.string("title");
    table.string("description");
    table.string("image_url");
    table.float("price");
    table.integer("likes").unsigned();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("products");
};
