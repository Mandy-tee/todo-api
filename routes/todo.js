import { Router } from "express";
import { countTodos, addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";
import { localUpload, todoIconUpload } from "../middlewares/Upload.js";

// Create a router
const todoRouter = Router();

// Define routes
todoRouter.post("/todos", todoIconUpload.single('icon'), addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.get("/todos/count", countTodos);

todoRouter.patch("/todos/:id", updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

// Export router
export default todoRouter;