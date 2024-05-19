const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  userImage: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
