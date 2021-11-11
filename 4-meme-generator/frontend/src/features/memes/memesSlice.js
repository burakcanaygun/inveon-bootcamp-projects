import {createSlice} from "@reduxjs/toolkit";
import {getMemesAsync, createMemeAsync} from "./memesAPI";


const memesSlice = createSlice({
    name: "memes",
    initialState: {
        memes: [],
        meme: {},
        finalMeme: '',
        loading: false,
        error: null,
    },
    reducers: {
        memesRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        memesSuccess: (state, action) => {
            state.memes = action.payload;
            state.loading = false;
            state.error = null;
        },
        memesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getSingleMemeById: (state, action) => {
            state.memes.forEach(meme => {
                if (meme.id === action.payload) {
                    state.meme = meme;
                }
            });
        },
    },
    extraReducers: {
        [getMemesAsync.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getMemesAsync.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getMemesAsync.fulfilled]: (state, action) => {
            state.memes = action.payload;
            state.loading = false;
            state.error = null;
        },
        [createMemeAsync.fulfilled]: (state, action) => {
            state.finalMeme = action.payload;
            state.loading = false;
            state.error = null;
        },
        [createMemeAsync.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [createMemeAsync.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
    },
});

export const {memesRequest, getSingleMemeById} = memesSlice.actions;
export default memesSlice.reducer;
