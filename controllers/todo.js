import { TodoModel } from "../models/todo.js";
import { addTodovalidator } from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
    try {
        // Validate user inputs
        const { error, value } = addTodovalidator.validate({
            ...req.body,
            icon: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }

        // Write todo to database
        await TodoModel.create(value);
        // Respond to request
        res.status(201).json("Todo was added!");
    } catch (error) {
        next(error);
    }
}

export const getTodos = async (req, res, next) => {
    try {
        const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;
        // Fetch todos from database
        const todos = await TodoModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .limit(limit)
            .skip(skip);
        // Return response
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}

export const countTodos = async (req, res, next) => {
    try {
        const { filter = "{}" } = req.query;
        // Count todos in database
        const count = await TodoModel.countDocuments(JSON.parse(filter));
        // Respond to request
        res.json({ count });
    } catch (error) {
        next(error);
    }
}

export const getTodo = async (req, res, next) => {
    try {
        const { } = req.params;
        // Get todo by id from database
        const todo = await TodoModel.findById(id);
        // Respond to request
        res.json(todo);
    } catch (error) {
        next(error);
    }
}

export const updateTodo = (req, res, next) => {
    res.json("Todo updated!");
}

export const deleteTodo = (req, res, next) => {
    res.json("Todo deleted!");
}