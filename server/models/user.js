const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    username: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    userImage: String,
  },
  { timestamps: true }
); // This will automatically add createdAt and updatedAt fields

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
