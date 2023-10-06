const express = require("express");
const { TaskModel } = require("../models/task.model");
const { authentication } = require("../middlewares/authentication");
const taskRouter = express.Router();

taskRouter.post("/", authentication, async (req, res) => {
  const userId = req.body.userId;

  const { title, description } = req.body;
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

taskRouter.get("/", authentication, async (req, res) => {
  const userId = req.body.userId;

  try {
    const tasks = await TaskModel.find({ userId });
    return res.status(200).send(tasks);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

taskRouter.get("/:id", authentication, async (req, res) => {
  const userId = req.body.userId;

  const id = req.params["id"];
  try {
    const tasks = await TaskModel.findOne({ _id: id, userId });
    if (!tasks) {
      return res.status(404).send({ message: "Access denied" });
    }
    res.status(200).send(tasks);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

taskRouter.put("/:id", authentication, async (req, res) => {
  const userId = req.body.userId;
  let id = req.params.id;
  const update = req.body;

  const task = await TaskModel.findOne({ _id: id, userId });
  if (!task) {
    return res.status(404).send({ message: "Task not found" });
  }
  try {
    await TaskModel.findByIdAndUpdate(id, update);
    res.status(200).send({ message: "Task Updated Sucessfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

taskRouter.delete("/:id", authentication, async (req, res) => {
  const userId = req.body.userId;
  let id = req.params.id;

  const task = await TaskModel.findOne({ _id: id, userId });
  if (!task) {
    return res.status(404).send({ message: "Task not found" });
  }
  try {
    await TaskModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Task Removed Sucessfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = { taskRouter };
