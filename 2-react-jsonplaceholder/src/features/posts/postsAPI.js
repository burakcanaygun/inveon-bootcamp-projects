import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
})
export const getSinglePostCommentsAsync = createAsyncThunk('posts/fetchSinglePostComments', async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return res.data;
})
export const getSelectedPostAsync = createAsyncThunk('posts/fetchSinglePost', async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.data;
})

export const createCommentAsync = createAsyncThunk('posts/createComment', async (payload) => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts/${payload.postId}/comments`, {
        body : payload.body,
        name: payload.name,
        email: payload.email,
        postId: payload.postId
    })
    return res.data;
})
// response only return id:101 so it cause children with the same key but in postSlice.js it's fixed.
export const createPostAsync = createAsyncThunk('posts/createPost', async (payload) => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        body : payload.body,
        title: payload.title,
        userId: payload.userId
    })
    return res.data;
})
//deprecated because API rejected DELETE request. It's return 404
export const deleteComment = createAsyncThunk('posts/deleteComment', async (payload) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/comments?id=${payload.id}`)
    return res.data;
})
// filtering post with id
export const filterPostsWithTitleAsync = createAsyncThunk('posts/filterPostsWithTitle', async (payload) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?title_like=${payload}`)
    return res.data;
})
//deprecated 
export const deletePost = createAsyncThunk('posts/deletePost', async (payload) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${payload.id}`)
    return res.data;
})
// don't try it otherwise it gonna blow up your browser :D
export const getPostPicturesAsync = createAsyncThunk('posts/fetchPostPictures', async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    return res.data;
})