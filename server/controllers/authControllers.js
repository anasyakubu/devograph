const User = require("../models/user");
const Task = require("../models/task");
const Note = require("../models/note");
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
      { expiresIn: "10hr" }
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
};

// List Task
const taskList = (req, res) => {
  // const { userID } = req.body;
  // console.log(userID);
  Task.find({})
    .then((task) => res.json(task))
    .catch((err) => console.log(err));
};

// Fetch [One]
const getTask = (req, res) => {
  const id = req.params.id;
  Task.find({ _id: id })
    .then((task) => res.json(task))
    .catch((err) => console.log(err));
};

// Create Task
const createTask = async (req, res) => {
  try {
    const { name, description, status, startDate, endDate, userID } = req.body;
    // check if name was entered
    if (!name) {
      return res.json({
        error: "Task Name is required",
      });
    } else if (!description) {
      return res.json({
        error: "Task Description is required",
      });
    } else if (!startDate) {
      return res.json({
        error: "Start Date is required",
      });
    } else if (!endDate) {
      return res.json({
        error: "End Date is required",
      });
    } else if (!status) {
      return res.json({
        error: "Status required",
      });
    } else if (!userID) {
      return res.json({
        error: "UserID is required",
      });
    }
    // check task exist
    const exist = await Task.findOne({ name });
    if (exist) {
      return res.json({
        error: "Task Already Added",
      });
    }

    // create Task in db
    const task = await Task.create({
      name,
      description,
      status,
      startDate,
      endDate,
      userID,
    });
    return res.json(task);
  } catch (error) {
    console.log(error);
  }
};

// update task
const updateTask = async (req, res) => {
  const id = req.params.id;
  try {
    const { name, description, status, startDate, endDate } = req.body;
    if (!name) {
      return res.json({
        error: "Task Name is required",
      });
    } else if (!description) {
      return res.json({
        error: "Task Description is required",
      });
    } else if (!startDate) {
      return res.json({
        error: "Start Date is required",
      });
    } else if (!endDate) {
      return res.json({
        error: "End Date is required",
      });
    } else if (!status) {
      return res.json({
        error: "Status required",
      });
    }

    const update = await Task.findByIdAndUpdate(
      { _id: id },
      {
        name,
        description,
        startDate,
        endDate,
        status,
      }
    )
      .then((update) => res.json(update))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

// delete task
const deleteUser = (req, res) => {
  const id = req.params.id;
  Task.findByIdAndDelete({ _id: id })
    .then((task) => res.json(task))
    .catch((err) => console.log(err));
};

// Note List
const noteList = (req, res) => {
  Note.find({})
    .then((note) => res.json(note))
    .catch((err) => console.log(err));
};

// Create Note
const createNote = async (req, res) => {
  try {
    const { name, note, taskID, userID } = req.body;
    // check if name was entered
    if (!name) {
      return res.json({
        error: "Note Name is required",
      });
    } else if (!note) {
      return res.json({
        error: "Note Description is required",
      });
    } else if (!taskID) {
      return res.json({
        error: "Select a Task",
      });
    } else if (!userID) {
      return res.json({
        error: "UserID is required",
      });
    }
    // check task exist
    const exist = await Note.findOne({ name });
    if (exist) {
      return res.json({
        error: "Note Already Added",
      });
    }

    // create Task in db
    const createNote = await Note.create({
      name,
      note,
      taskID,
      userID,
    });
    return res.json(createNote);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  taskList,
  getTask,
  createTask,
  updateTask,
  deleteUser,
  noteList,
  createNote,
};
