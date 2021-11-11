import {ImageList} from '@mui/material';
import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import {getMemesAsync} from '../../features/memes/memesAPI';
import MemeCard from '../MemeCard'
import Loading from "../Loading";

const MemeContainer = () => {
    const dispatch = useDispatch();
    // get memes from store
    const memes = useSelector(state => state.memes.memes);
    const loading = useSelector(state => state.memes.loading);

    useEffect(() => {
        dispatch(getMemesAsync());
    }, [dispatch]);

    return (
        <>
            {loading ? (<Loading/>) :
                (<ImageList
                    sx={{width: '100%', height: 'auto'}} cols={3}>
                    {memes.map(meme => (
                        <MemeCard key={meme.id} id={meme.id} name={meme.name} url={meme.url}
                                  cols={meme.cols} rows={meme.rows} box_count={meme.box_count}/>
                    ))}
                </ImageList>)}
        </>
    )
}

export default MemeContainer
