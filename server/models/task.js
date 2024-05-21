const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    description: String,
    status: String,
    userID: String,
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
