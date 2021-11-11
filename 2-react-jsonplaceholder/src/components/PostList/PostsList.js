import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { getPostsAsync } from "../../features/posts/postsAPI";

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    // getting posts from the server
    useEffect(() => {
        dispatch(getPostsAsync());
    }, [dispatch]);
    return (
        <>
            {posts.length > 0 ? posts.map(p => <Post key={p.id} body={p.body} id={p.id} title={p.title} userId={p.userId} />) : <h1 className={'is-size-1'}>There is no post like that</h1>}
        </>
    );
};

export default PostsList;
