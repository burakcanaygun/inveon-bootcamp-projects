import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import {  addTodoAsync, completeTodoAsync, deleteTodoAsync, fetchTodosAsync, deleteAllTodosAsync } from './todosAPI';


// This slice is used to manage the todos
const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: uuid(),
                title: action.payload.title,
                explanation: action.payload.explanation,
                date: action.payload.date,
                dayLeft: action.payload.dayLeft === '' ? 1 : action.payload.dayLeft,
                completed: false,
            };
            state.push(newTodo);
        },
        completeTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            todo.completed = !todo.completed;
        },
        deleteAllTodos: (state) => {
            state.splice(0, state.length);
        },
        deleteTodo: (state, action) => {
            const todoIndex = state.findIndex(todo => todo.id === action.payload.id);
            state.splice(todoIndex, 1);
        },
    },
    // This extra reducer is used to fetch the todos from the API
    extraReducers: {
        [fetchTodosAsync.fulfilled]: (action) => {
            return action.payload;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.push(action.payload.todo);
        },
        [completeTodoAsync.fulfilled]: (state, action) => {
            const todoIndex = state.findIndex((todo) => todo.id === action.payload.todo.id);
            state[todoIndex] = action.payload.todo;
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            const todoIndex = state.findIndex(todo => todo.id === action.payload.todo.id);
            state.splice(todoIndex, 1);
        },
        [deleteAllTodosAsync.fulfilled]: (state) => {
            state.splice(0, state.length);
        }

    }

});

// Export the reducer
export const { addTodo, completeTodo, deleteAllTodos, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;