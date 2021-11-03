import React from 'react';
import { Block, Button, Columns, Notification } from "react-bulma-components";
import { useDispatch } from 'react-redux';
import { deleteSingleComment } from '../../features/posts/postsSlice';

const Comment = ({ postId, id, name, email, body }) => {
    // using dispatch for delete comment
    const dispatch = useDispatch();
    return (
        <Block key={id}>
            <Notification color="dark">
                <Columns>
                    <Columns.Column size={12}>
                        {body}
                    </Columns.Column>
                    <Columns.Column size={12}  className={"is-flex-tablet"}>
                        <Columns.Column size={5}>
                            {name}
                        </Columns.Column>
                        <Columns.Column size={5}>
                            {email}
                        </Columns.Column>
                        <Columns.Column size={2}>
                            <Button color="danger" onClick={() => { dispatch(deleteSingleComment({ id })) }}>Delete</Button>
                        </Columns.Column>
                    </Columns.Column>
                </Columns>
            </Notification>
        </Block>
    );
};

export default Comment;
