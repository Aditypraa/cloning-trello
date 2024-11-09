const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
const URL = "/api/v1";

// Import Routes
const todosRoutes = require("./app/api/todos/todos.routes");
const itemsRoutes = require("./app/api/item/item.routes");
// End Routes

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Endpoint API
app.get("/", function (req, res) {
  res.json({
    message: "Welcome API Clone Trello",
    version: "1.0",
  });
});

app.use(`${URL}`, todosRoutes);
app.use(`${URL}`, itemsRoutes);
// End Endpoint API

// Handle Error
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500).json({ message: err.message });
});
// End Handle Error

app.listen(8000, () => {
  console.log(`💡 listening on http://localhost:8000`);
});

module.exports = app;
