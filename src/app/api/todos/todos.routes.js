const express = require("express");
const router = express.Router();

// Import Controller
const TodosController = require("./todos.controller");

// Import Validation
const {
  validateCreate,
  validateOne,
  validateUpdate,
  validateDelete,
} = require("./todos.validator");

/* GET home page. */
router.get("/todos", TodosController.getAll);
router.post("/todos", validateCreate, TodosController.create);
router.get("/todos/:id", validateOne, TodosController.getOne);
router.put("/todos/:id", validateUpdate, TodosController.update);
router.delete("/todos/:id", validateDelete, TodosController.destroy);

module.exports = router;
