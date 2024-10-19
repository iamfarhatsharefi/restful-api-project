const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); // Ensure this path is correct

// Get all users
router.get("/", userController.getAllUsers);

// Create a new user
router.post("/", userController.createUser);

// Update a user
router.put("/:id", userController.updateUser);

// Delete a user
router.delete("/:id", userController.deleteUser);

module.exports = router;
