import React from 'react';
import {useSelector} from "react-redux";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import TextCaption from "../TextCaption";
import Loading from "../Loading";

const Meme = () => {
    const meme = useSelector(state => state.memes.meme);
    const loading = useSelector(state => state.memes.loading);
    return (
        <>
            {loading ? (<Loading/>) : (
                <Grid mt={3} display={"flex"} justifyContent={"center"} alignItems={"center"}
                      textAlign={"center"} flexDirection={"column"}>
                    <Card key={meme.id}
                          style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Typography variant={"h4"}>
                            {meme.name}
                        </Typography>
                        <CardMedia component={"img"} image={meme.url} alt={meme.name} height={'auto'}
                                   style={{width: "50%"}}/>
                        <CardContent>
                            <TextCaption/>
                        </CardContent>
                    </Card>
                </Grid>
            )}
        </>
    );
};

export default Meme;
