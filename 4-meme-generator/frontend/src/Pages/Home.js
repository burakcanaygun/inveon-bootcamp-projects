import { Grid } from '@mui/material'
import React from 'react'
import MemeContainer from '../components/MemeList'

const Home = () => {
    return (
        <div>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                <Grid item xs>
                    <h1>Meme Generator</h1>
                </Grid>
                <Grid item xs>
                    <MemeContainer />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
