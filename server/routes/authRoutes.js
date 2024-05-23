const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/authMiddleware");
const cros = require("cors");
const {
  test,
  registerUser,
  taskList,
  getTask,
  createTask,
  updateTask,
  deleteUser,
  loginUser,
  getProfile,
} = require("../controllers/authControllers");

// middleware
router.use(
  cros({
    credentials: true,
    origin: "http://localhost:5173", //or http://localhost:5173/
  })
);

// Apply requireAuth middleware to protect all routes
// router.use(requireAuth);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/taskList", taskList);
router.get("/getTask/:id", getTask);
router.post("/createTask", createTask);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteUser/:id", deleteUser);
router.get("/profile", requireAuth, getProfile);

module.exports = router;
