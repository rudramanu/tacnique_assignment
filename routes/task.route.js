const express = require("express");
const { TaskModel } = require("../models/task.model");
const { authentication } = require("../middlewares/authentication");
const taskRouter = express.Router();

taskRouter.post("/", authentication, async (req, res) => {
  const userId = req.body.userId;
  const { title, description, creation_date } = req.body;
  try {
    const new_task = new TaskModel({
      title,
      description,
      creation_date: new Date(),
      userId,
    });
    await new_task.save();
    res.send({ message: "Task created" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = { taskRouter };
