const express = require("express");
const dotenv = require("dotenv").config();
const cros = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

// database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not connected", err));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes"));

const PORT = 9000;
app.listen(PORT, () => console.log("Server is starting on port 9000"));

app.use(errorHandler);
