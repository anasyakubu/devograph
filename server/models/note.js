const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    taskID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },

    userID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const NoteModel = mongoose.model("Note", noteSchema);

module.exports = NoteModel;
