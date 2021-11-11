import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom'
import {getSingleMemeById} from '../features/memes/memesSlice';
import Meme from "../components/Meme";
import {Grid} from "@mui/material";

const Generator = () => {
    // get params from home
    let params = useLocation();
    // deconstruct params
    const {id} = params.state;
    
    const dispatch = useDispatch(getSingleMemeById(id));
    useEffect(() => {
        dispatch(getSingleMemeById(id));
    }, [dispatch, id]);

    return (
        <Grid>
            <Meme/>
        </Grid>
    )
}

export default Generator
