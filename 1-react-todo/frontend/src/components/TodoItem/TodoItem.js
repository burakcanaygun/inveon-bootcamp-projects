import React from 'react'
import { Accordion } from 'react-bootstrap'
import { Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { completeTodoAsync, deleteTodoAsync } from '../../features/todos/todosAPI'
const TodoItem = ({ id, dayLeft, title, explanation, completed }) => {
    const dispatch = useDispatch()

    // handle complete todo
    const handleComplete = () => {
        dispatch(completeTodoAsync({ id, completed: !completed }));
    }

    // handle delete todo
    const handleDelete = () => {
        dispatch(deleteTodoAsync({ id }));
    };
    
    // icons
    let icon = <i className="fa-solid fa-spinner fa-spin-pulse" />;
    let check = <i className="fa-solid fa-check" />;
    let trash = <i className="fa-solid fa-trash" />;

    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                <div className={"d-md-flex"}>
                    <Col xs={12} md={9} className={"d-flex"}>
                        <Col xs={9} md={9}>
                            {explanation}
                        </Col>
                        <Col xs={3} md={3} className={"text-center"}>
                            {dayLeft}
                        </Col>
                    </Col>

                    <Col xs={12} md={3} className={"text-center my-auto d-flex d-md-block align-items-center text-center"}>
                        <Col xs={4} md={12} className={"mb-2"} >
                            <Button variant={`${completed ? 'success' : 'warning'}`} onClick={handleComplete} className={"col-8"}>{completed ? check : icon}</Button>
                        </Col>
                        <Col xs={4} md={12}>
                            <Button variant="danger" className={"col-8"} onClick={handleDelete}>{trash}</Button>
                        </Col>
                    </Col>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default TodoItem
