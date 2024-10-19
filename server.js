const express = require("express");
const { connectDB } = require("./config/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Database connection
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
