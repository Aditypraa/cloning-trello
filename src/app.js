const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

// Import Routes
const indexRouter = require("./routes/Index.routes");
const usersRouter = require("./routes/Users.routes");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Endpoint API
app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(8000, () => {
  console.log(`💡 listening on http://localhost:8000`);
});

module.exports = app;
