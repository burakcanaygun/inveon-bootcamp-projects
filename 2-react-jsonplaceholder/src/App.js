import React from 'react';
import 'bulma/css/bulma.min.css';
import {Columns, Container} from "react-bulma-components";
import PostsList from "./components/PostList/PostsList";
import CustomModal from "./components/CustomModal/CustomModal";
import SearchBar from "./components/SearchBar/SearchBar";
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import './App.css';


function App () {
    return (
        <Container max={true} className={"p-1"}>
            <Columns centered>
                <Columns.Column
                                size={6}>
                    <SearchBar/>
                    <CreatePostForm/>
                </Columns.Column>
            </Columns>
            <Columns centered>
                <PostsList/>
                <CustomModal/>
            </Columns>
        </Container>
    );
}

export default App;
