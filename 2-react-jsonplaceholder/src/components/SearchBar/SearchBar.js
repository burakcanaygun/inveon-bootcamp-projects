import React, { useState } from 'react';
import { Button, Columns, Form } from "react-bulma-components";
import { useDispatch } from "react-redux";
import { filterPostsWithTitleAsync } from '../../features/posts/postsAPI';
import { postFormOpen } from '../../features/posts/postsSlice';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    // by clicking create post button, we dispatch the action to open the post form (for more info see CreatePostForm.js)
    const handleFormOpen = () => {
        dispatch(postFormOpen());
    };

    return (
        <Columns.Column>
            <Form.Field align={'center'} justifyContent={'center'} alignItems={'center'} >
                <Form.Control>
                    <Form.Input
                        color="info"
                        placeholder="Filter posts"
                        status="hover"
                        type="text"
                        value={search}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Control>
                <Button.Group className={"is-flex-direction-row is-flex-wrap-nowrap mt-1"}>
                    <Button color={'info'} onClick={() => { dispatch(filterPostsWithTitleAsync(search)); }} className={"mr-1"} fullwidth>Search</Button>
                    <Button color={'success'} onClick={() => { handleFormOpen() }} fullwidth>Create Post</Button>
                </Button.Group>

            </Form.Field>
        </Columns.Column>
    );
};

export default SearchBar;
