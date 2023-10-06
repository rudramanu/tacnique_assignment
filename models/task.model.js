const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creation_date: { type: Date, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  userId: { type: String },
});

const TaskModel = mongoose.model("task", taskSchema);

module.exports = { TaskModel };
