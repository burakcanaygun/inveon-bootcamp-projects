import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList/TodoList';
import { Col, Container, Row } from 'react-bootstrap';
import TodoInput from './components/TodoInput/TodoInput';

function App() {
  return (
    <Container>
      <Row>
        <Col md={6} className={"mx-auto my-auto"}>
          <h1 className={"text-center my-2"}>Todo List</h1>
          <TodoInput />
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
