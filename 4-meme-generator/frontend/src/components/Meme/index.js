import React from 'react';
import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import TextCaption from "../TextCaption";
import Loading from "../Loading";
import { useNavigate } from 'react-router';

const Meme = () => {
    const meme = useSelector(state => state.memes.meme);
    const loading = useSelector(state => state.memes.loading);
    const navigation = useNavigate();
    return (
        <>
            {loading ? (<Loading />) : meme.id ? (
                <Grid mt={3} display={"flex"} justifyContent={"center"} alignItems={"center"}
                    textAlign={"center"} flexDirection={"column"}>
                    <Card key={meme.id}
                        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant={"h4"}>
                            {meme.name}
                        </Typography>
                        <CardMedia component={"img"} image={meme.url} alt={meme.name} height={'auto'}
                            style={{ width: "50%" }} />
                        <CardContent>
                            <TextCaption />
                        </CardContent>
                    </Card>
                </Grid>
            ) : (
                <Grid align={"center"}>
                    <Typography variant={"h4"} align={"center"}> There is no meme for you sorry. </Typography>
                    <Button variant={"contained"} color={"primary"} onClick={() => navigation('/')}> Go Back Home </Button>
                </Grid>
            )}
        </>
    );
};

export default Meme;
