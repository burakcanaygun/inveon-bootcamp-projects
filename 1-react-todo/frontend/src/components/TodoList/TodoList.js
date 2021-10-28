import React, { useEffect } from 'react'
import { Accordion } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosAsync } from '../../features/todos/todosAPI';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
    const dispatch = useDispatch();
    //get todos state
    const todos = useSelector(state => state.todos);

    //get todos from api
    useEffect(() => {
        dispatch(fetchTodosAsync());
        // if any todos are added or deleted, fetch them again
    }, [dispatch, todos.length]);


    return (
        <Accordion defaultActiveKey={0}>
            {todos && todos.map(todo => (
                <TodoItem key={todo.id} id={todo.id} dayLeft={todo.dayLeft} title={todo.title} explanation={todo.explanation} completed={todo.completed} />)
            )}
        </Accordion>
    )
}

export default TodoList
