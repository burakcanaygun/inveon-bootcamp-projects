import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearSinglePost, modalOpen } from "../../features/posts/postsSlice";
import Comment from "../Comment/Comment";
import { getSinglePostCommentsAsync } from "../../features/posts/postsAPI";
import CommentForm from '../CommentForm/CommentForm';

const CustomModal = () => {
    const dispatch = useDispatch();
    // getting the single post from the store and setting it to a variable
    const { title, body } = useSelector(state => state.posts.singlePost);
    // getting the comments from the store and setting it to a variable
    const singlePostComments = useSelector(state => state.posts.singlePostComments);
    // checking modal is open or not if it is open then we will show the modal
    const isOpen = useSelector(state => state.posts.isOpen);

    const handleClick = () => {
        dispatch(modalOpen(!isOpen));   
    }
    // if the modal is closed then we will clear the single post from the store
    if (!isOpen){
        dispatch(clearSinglePost());
    }
    // if the modal is open then we will get the comments of the post
    useEffect(() => {
        dispatch(getSinglePostCommentsAsync())
    }, [dispatch]);

    return (
        <>
            <div className={`modal p-3 ${isOpen ? 'is-active' : ''}`}>
                <div className="modal-background" />
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title" style={{ inlineSize: 'min-content' }}>{title}</p>
                        <button className="delete" aria-label="close" onClick={handleClick} />
                    </header>
                    <section className="modal-card-body">
                        {body}
                        <h1 className={'has-text-weight-bold is-size-3'}>Comments</h1>
                        {singlePostComments.length > 0 && singlePostComments.map(c => (<Comment key={c.id} postId={c.postId} id={c.id} body={c.body} email={c.email}
                            name={c.name} />))}
                        <CommentForm />
                    </section>
                </div>
            </div>
        </>
    );
};

export default CustomModal;
