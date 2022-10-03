const productsService = require("./products.service");
const hasProperties = require("../errors/hasProperties"); 
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// ---- VALIDATION MIDDLEWARE ---- //

const hasRequiredUpdateProperties = hasProperties(["likes"]);

async function productExists(req, res, next) {
  const { productId } = req.params;
  const product = await productsService.read(productId);
  if (product) {
    res.locals.product = product;
    return next();
  }
  next({
    status: 404,
    message: `Product ${productId} cannot be found.`
  });
}

// ---- CRUD FUNCTIONS ---- //

function read(req, res) {
  res.json({ data: res.locals.product });
}

async function updateLikes(req, res) {
  const { product_id } = res.locals.product;
  const { likes } = req.body.data;
  const updatedProduct = await productsService.updateLikes(product_id, likes);
  res.status(200).json({ data: updatedProduct });
}

async function list(req, res) {
  res.json({ data: await productsService.list() });
}

module.exports = {
  read: [
    asyncErrorBoundary(productExists),
    read
  ],
  updateLikes: [
    hasRequiredUpdateProperties,
    asyncErrorBoundary(productExists),
    asyncErrorBoundary(updateLikes)
  ],
  list: asyncErrorBoundary(list),
}