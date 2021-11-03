import { createSlice } from '@reduxjs/toolkit';
import { createCommentAsync, createPostAsync, deleteComment, deletePost, filterPostsWithTitleAsync, getPostPicturesAsync, getPostsAsync, getSelectedPostAsync, getSinglePostCommentsAsync } from "./postsAPI";

const initialState = {
    posts: [],
    singlePost: {},
    singlePostComments: [],
    postImages: [],
    isOpen: false,
    isPostFormOpen: false,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // clear singlePost state after modal is closed
        clearSinglePost: (state) => {
            state.singlePost = initialState.singlePost;
            state.singlePostComments = initialState.singlePostComments;
        },
        // open modal
        modalOpen: (state) => {
            state.isOpen = !state.isOpen
        },
        // open post form
        postFormOpen: (state) => {
            state.isPostFormOpen = !state.isPostFormOpen
        },
        // delete single comment from singlePostComments
        deleteSingleComment: (state, action) => {
            state.singlePostComments = state.singlePostComments.filter(comment => comment.id !== action.payload.id)
        },
        // delete single post from posts
        deleteSinglePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        // add single post to posts
        addSinglePost: (state, action) => {
            state.posts.push(action.payload)
        },
        // get single post from posts
        getSinglePost: (state, action) => {
            state.singlePost = state.posts.find(post => post.id === action.payload)
        },
    },
    extraReducers: {
        // get all posts from API
        [getPostsAsync.fulfilled]: (state, action) => {
            state.posts = action.payload;
        },
        // get single post comments from API and set singlePostComments
        [getSinglePostCommentsAsync.fulfilled]: (state, action) => {
            state.singlePostComments = action.payload;
        },
        // get single post from posts and set to singlePost object
        [getSelectedPostAsync.fulfilled]: (state, action) => {
            state.singlePost = action.payload
        },
        //dont try it, it's gonna blow up your browser :D
        [getPostPicturesAsync.fulfilled]: (state, action) => {
            state.postImages.push(action.payload)
        },
        // send a POST request to API and create new Post (for more info check CreatePostForm.js)
        [createPostAsync.fulfilled]: (state, action) => {
            // if you don't do this API return you only id:101 so it's cause an error
            // you have to increase id value in this case
            state.posts.push({ ...action.payload, id: state.posts.length + 1 })
        },
        // send a POST request to API and create new Comment for a Post (for more info see CommentForm.js and Post.js)
        [createCommentAsync.fulfilled]: (state, action) => {
            state.singlePostComments.push(action.payload)
        },
        // rejected from API. If you implement this in the future, make sure to handle it in the reducer
        [deleteComment.fulfilled]: (state, action) => {
            state.singlePostComments = state.singlePostComments.filter(comment => comment.id !== action.payload)
        },
        // does not return any payload, so you can't filter it
        [deletePost.fulfilled]: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        // filter posts with title for more info check postsAPI.js
        [filterPostsWithTitleAsync.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
    }
})

export const { modalOpen, deleteSingleComment, deleteSinglePost, clearSinglePost, addSinglePost, getSinglePost, postFormOpen } = postsSlice.actions;

export default postsSlice.reducer;
