require("dotenv").config(); //Load environment variables from a .env file into process.env

const express = require("express"); // Import Express framework

const mongoose = require("mongoose"); // Import mongoose for mongoDB interaction

const cors = require("cors");

const app = express(); // spining up the express framework server

const port = 3000; // Define the port number for the server

// CORS (Cross-Origin Resource Sharing): when the front-end and back-end are from different origins(domains, ports, protocols) and the backend hasn't been configured to accept requests from the fronend origin

app.use(cors());

const taskRouter = require("./routes/taskRouter"); //Import the taskRouter for task-related routes

const notFound = require("./middlewares/notFound"); //Import the middleware 404 not found error

app.use(express.json()); //Middleware to parse incoming JSON request from postman allowing access to the req.body

app.use("/api/task", taskRouter); // Mount the taskRouter at /api/task, all task-related routes starts with /api/task

app.use(notFound); // Use the custom 404 middleware for handling unmatched routes

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Databased connected");

    // Start the server and listen on thr specified port
    app.listen(port, () => {
      console.log(`server is runing on PORT ${port}`);
    });
  } catch (error) {
    // log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

// Mongoose is an ODM (Object Data Modelling) library for MongoDB and Node.js.

// MongoDB is a NoSQL database that stores data in a flexible, JSON like format.

//atmartinz3659
//CypjSynlwNEyTKzq
//mongodb+srv://atmartinz3659:CypjSynlwNEyTKzq@cluster0.aco8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
