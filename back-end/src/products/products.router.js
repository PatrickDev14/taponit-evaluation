const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const productsController = require("./products.controller");

router.route("/")
  .get(productsController.list)
  .all(methodNotAllowed);

router.route("/:productId")
  .all(methodNotAllowed);

module.exports = router;