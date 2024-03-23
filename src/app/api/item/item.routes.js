const express = require("express");
const router = express.Router();

// Import Controller
const ItemController = require("./item.controller");

// Import Validation
// const {
//   validateCreate,
//   validateOne,
//   validateUpdate,
//   validateDelete,
// } = require("./todos.validator");

/* GET home page. */
router.post("/items", ItemController.create);
router.get("/items/:id", ItemController.getOne);
router.put("/items/:id", ItemController.update);
router.put("/items/:id/move", ItemController.move);
router.delete("/items/:id", ItemController.destroy);

module.exports = router;
