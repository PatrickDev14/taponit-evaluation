const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// ---- CRUD FUNCTIONS ---- //

async function list(req, res) {
  res.json({ data: await productsService.list() });
}

module.exports = {
  list: asyncErrorBoundary(list),
}