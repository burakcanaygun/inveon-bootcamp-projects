import {Container} from '@mui/material';
import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Generator from './Pages/Generator';
import {
    Routes, Route,
} from 'react-router-dom';
import Created from "./Pages/Created";

function App () {
    return (
        <Container>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route path={"/generator/:id"} element={<Generator/>}/>
                <Route path={"/created"} element={<Created/>}/>
            </Routes>
        </Container>
    );
}

export default App;
