import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {v4 as uuid } from "uuid";

// Fetches todos from the server
export const fetchTodosAsync = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('https://floating-caverns-99192.herokuapp.com/api/todos');
    const todos = response.data;
    return todos;
});

// Adds a todo to the server
export const addTodoAsync = createAsyncThunk('todos/addTodo', async (todo) => {
    const response = await axios.post('https://floating-caverns-99192.herokuapp.com/api/todos', {
        id : uuid(),
        title: todo.title,
        explanation: todo.explanation,
        date : todo.date,
        dayLeft : todo.dayLeft,
    });
    if(response.status === 200) {
        const todo = response.data;
        return {todo};
    }
});


// Complete a todo on the server
export const completeTodoAsync = createAsyncThunk('todos/completeTodo', async (payload) => {
    const response = await axios.patch(`https://floating-caverns-99192.herokuapp.com/api/todos/${payload.id}`, {
        completed: payload.completed,
    });
    if(response.status === 200) {
        const todo = response.data;
        return {todo};
    }
});

// Delete a todo on the server
export const deleteTodoAsync = createAsyncThunk('todos/deleteTodo', async (id) => {
    const response = await axios.delete(`https://floating-caverns-99192.herokuapp.com/api/todos/${id}`);
    if(response.status === 200) {
        const todo = response.data;
        return {todo};
    }
});

// Delete all todos on the server
export const deleteAllTodosAsync = createAsyncThunk('todos/deleteAllTodos', async () => {
    const response = await axios.delete(`https://floating-caverns-99192.herokuapp.com/api/todos`);
    if(response.status === 200) {
        return response.data;
    }
});
