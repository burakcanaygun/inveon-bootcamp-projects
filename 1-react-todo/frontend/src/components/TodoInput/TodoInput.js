import React, { useState } from 'react'
import { Button, Col, Form, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOffcanvas } from '../../features/offcanvas/offcanvasSlice';
import { addTodoAsync, deleteAllTodosAsync } from '../../features/todos/todosAPI';

const TodoInput = () => {
    //form states
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [explanation, setExplanation] = useState('');
    const [dayLeft, setDayLeft] = useState('');

    const todos = useSelector(state => state.todos);

    // update date state to today
    const updateDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        return yyyy + '-' + mm + '-' + dd;
    };

    // count date difference between today and selected date
    const countDateDifference = (date) => {
        setDate(date);
        const today = new Date();
        const selectedDate = new Date(date);
        const diff = Math.abs(today.getTime() - selectedDate.getTime());
        const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        // if diffDays is 0, set dayLeft to 'today' else set dayLeft to diffDays
        return diffDays === 0 || '' ? setDayLeft('Today') : setDayLeft(diffDays + ' days left');
    };

    //redux states
    const dispatch = useDispatch();

    //get state
    const offcanvas = useSelector(state => state.offcanvas);
    //show and hide offcanvas
    const handleClose = () => dispatch(toggleOffcanvas());
    const handleShow = () => dispatch(toggleOffcanvas());

    //dispatch for global call

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodoAsync({ title, date, dayLeft, explanation }));
        //hide canvas otherwise all components will be gone
        dispatch(toggleOffcanvas());
        resetForm();
    };

    //delete all todos
    const handleDeleteAll = () => {
        dispatch(deleteAllTodosAsync());
    };
    //empty form
    const resetForm = () => {
        setTitle('');
        setDate('');
        setExplanation('');
        setDayLeft('');
    };


    return (
        <>
            <Button variant="primary" onClick={handleShow} className={"col-6 my-2 mx-auto"}>
                Add Todo
            </Button>
            <Button variant="danger" onClick={() => { handleDeleteAll() }} className={"col-6 my-2 mx-auto"} disabled={todos.length > 0 ? false : true}>
                Delete All
            </Button>
            <Offcanvas show={offcanvas.isOpen} onHide={handleClose} placement={"end"}>
                <div className="container row mx-auto">
                    <Offcanvas.Header className={"d-flex"} closeButton>
                        <Offcanvas.Title>Add New Todo</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="fromGridTitle" className={"col-12"}>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="I have to do..." value={title} onChange={(e) => setTitle(e.target.value)} required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDate" className={"col-12"}>
                                    <Form.Label>When?</Form.Label>
                                    <Form.Control type="date" value={date} min={updateDate()} onChange={(e) => countDateDifference(e.target.value)} required />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridTextBox">
                                <Form.Label>Explanation</Form.Label>
                                <Form.Control placeholder="Type Something..." type={"text"} value={explanation} onChange={(e) => setExplanation(e.target.value)} required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className={"col-12"} onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Offcanvas.Body>
                </div>
            </Offcanvas>
        </>
    );
}


export default TodoInput
