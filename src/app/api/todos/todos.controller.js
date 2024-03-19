const { Todo, Item } = require("../../db/models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Todo.findAll({
        attributes: ["id", "name"],
        include: {
          model: Item,
          attributes: ["id", "name", "TodoId"],
        },
      });

      res.status(200).json({
        message: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const result = await Todo.create({
        name,
      });
      res.status(201).json({
        message: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Todo.findOne({
        where: { id: id },
      });
      res.status(201).json({
        message: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    Todo.findOne({ where: { id } })
      .then((todo) => {
        todo.update({ name }).then(() => {
          res.status(201).json({
            message: "Success",
            data: todo,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  destroy: (req, res) => {
    const { id } = req.params;

    Todo.findOne({ where: { id } })
      .then((todo) => {
        todo.destroy().then(() => {
          res.status(201).json({
            message: "Success",
            data: todo,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
