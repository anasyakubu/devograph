const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// Test Endpoint
const test = (req, res) => {
  res.json("test endpoint");
};

// Register Endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if name was entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // check if password is good
    if (!password || password.length < 4) {
      return res.json({
        error: "Password is required and it should be 4 characters long",
      });
    }
    // check email exist
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email Already Taken",
      });
    }

    const hashedPassword = await hashPassword(password);
    // create user in db
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login Endpoint

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No User Found",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      throw new Error("Invalid credentials!");
    }

    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );

    return res.json({
      message: "User logged in successfully!",
      email: user.email,
      token: token,
      userId: user._id,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Profile
const getProfile = (req, res) => {
  res.json({
    message: "Authorized",
    status: 200,
    // userId: user._id,
  });
  // const { token } = req.cookies;
  // if (token) {
  //   jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
  //     if (err) throw err;
  //     res.json(user);
  //   });
  // } else {
  //   res.json(null);
  // }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
