const express = require("express");
const router = express.Router();

// Import Controller
const ItemController = require("./item.controller");

// Import Validation
const {
  validateCreate,
  validateOne,
  validateUpdate,
  validateDelete,
  validateMove,
} = require("./item.validator");

/* GET home page. */
router.post("/items", validateCreate, ItemController.create);
router.get("/items/:id", validateOne, ItemController.getOne);
router.put("/items/:id", validateUpdate, ItemController.update);
router.put("/items/:id/move", validateMove, ItemController.move);
router.delete("/items/:id", validateDelete, ItemController.destroy);

module.exports = router;
