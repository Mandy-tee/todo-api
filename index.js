import express from "express";
import todoRouter from "./routes/todo.js";

// Create an express app
const app = express();

// Use routes
app.use(todoRouter);

// Listen for incoming requests
app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
