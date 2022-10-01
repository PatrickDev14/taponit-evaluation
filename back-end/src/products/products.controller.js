const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// ---- VALIDATION MIDDLEWARE ---- //

async function productExists(req, res, next) {
  const { productId } = req.params;
  const product = await productsService.read(productId);
  if (product) {
    res.locals.product = product;
    return next();
  }
  next({
    status: 404,
    message: "Product cannot be found."
  });
}

// ---- CRUD FUNCTIONS ---- //

function read(req, res, next) {
  res.json({ data: res.locals.product });
}

async function list(req, res) {
  res.json({ data: await productsService.list() });
}

module.exports = {
  read: [
    asyncErrorBoundary(productExists),
    read
  ],
  list: asyncErrorBoundary(list),
}