const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const { v4: uuid } = require('uuid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let todos = [];


// get todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// create todo
app.post('/api/todos', (req, res) => {
    const { id, title, explanation, dayLeft, date } = req.body;
    const newTodo = {
        id: id || uuid(),
        title,
        explanation,
        dayLeft,
        date
    };
    todos.push(newTodo);
    res.json(newTodo);
});

//find id with findindex and update completed
app.patch('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const index = todos.findIndex(todo => todo.id === id);
    todos[index].completed = completed;
    res.json(todos[index]);
});

// delete todo
app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    res.json(todos);
});

// delete all todos
app.delete('/api/todos', (req, res) => {
    todos = [];
    res.json(todos);
});


const PORT = process.env.PORT || 5000;
// start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});