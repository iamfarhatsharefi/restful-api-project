const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Get all users
router.get("/", getAllUsers);

// Create a new user
router.post("/", createUser);

// Update a user
router.put("/:id", updateUser);

// Delete a user
router.delete("/:id", deleteUser);

module.exports = router;
