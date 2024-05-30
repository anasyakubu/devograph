// Import necessary modules
const http = require("http");
const cron = require("node-cron");

// Define the server URL
const serverUrl = "https://devograph.onrender.com"; // Replace with your server URL

// Define the function to ping the server
const pingServer = () => {
  console.log("Pinging server...");
  // Ping the server
  http
    .get(serverUrl, (res) => {
      console.log(`Server response: ${res.statusCode}`);
    })
    .on("error", (err) => {
      console.error("Error pinging server:", err);
    });
};

// Define the cron schedule to run every 5 minutes
cron.schedule("*/5 * * * *", () => {
  pingServer();
});

// Your main application code goes here...

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
// const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

// database connection
mongoose
  .connect(process.env.MONGODB_URL, {
    dbName: "taskManager",
    bufferCommands: false,
    connectTimeoutMS: 30000,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not connected", err));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Create corsOptions object with your desired configuration
const corsOptions = {
  origin: ["https://devograph.vercel.app", "http://localhost:5173"], // Set the allowed origin
  methods: "GET,POST,DELETE,PUT", // Set the allowed HTTP methods
  optionsSuccessStatus: 200, // Set the status code for successful preflight requests
};

// Pass corsOptions to the CORS middleware
app.use(cors(corsOptions));

app.use("/", require("./routes/authRoutes"));

const PORT = 9000;
app.listen(PORT, () => console.log("Server is starting on port 9000"));

app.use(errorHandler);
