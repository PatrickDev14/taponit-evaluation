const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const productsController = require("./products.controller");

router.route("/")
  .get(productsController.list)
  .all(methodNotAllowed);

router.route("/:productId")
  .get(productsController.read)
  .patch(productsController.updateLikes)
  .all(methodNotAllowed);

module.exports = router;