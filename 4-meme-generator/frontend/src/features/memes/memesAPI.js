import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getMemesAsync = createAsyncThunk(
    'memes/getMemes',
    async () => {
        const response = await axios.get('http://localhost:5000/');
        return response.data;
    }
);

export const createMemeAsync = createAsyncThunk(
    'memes/createMeme',
    async (memeData) => {
        const response = await axios.post('http://localhost:5000/create', memeData);
        return response.data;
    }
);
