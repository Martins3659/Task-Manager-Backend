const express = require("express"); // Import express framework
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
} = require("../controller/taskController");

const router = express.Router(); // Create a new router instance

router.get("/", getAllTask); // Route to get all tasks, handled by getAllTask function

router.post("/create", createTask); // Route to create a new task, handled by createtask function

router.patch("/:id", editTask); // Route to edit a specific task by its ID, handled by editTask function in controller

router.delete("/:id", deleteTask); // Route to delete a specific task by its ID,handled by deleteTask function from controller

router.get("/:id", eachTask); // Route to get a specific task by its ID,handled by eachTask function from controller

// ======must always be the last on this page===========
module.exports = router; // Export the router to be used in the main server file app.js
