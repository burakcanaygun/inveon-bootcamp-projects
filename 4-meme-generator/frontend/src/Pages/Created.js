import React from 'react';
import {useSelector} from "react-redux";
import {Box, Button, ButtonGroup, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Loading from "../components/Loading";

const Created = () => {
    // get created meme
    const finalMeme = useSelector(state => state.memes.finalMeme);
    //use navigate to push home
    let navigate = useNavigate();
    const loading = useSelector(state => state.memes.loading);
    return (
        <>
            {loading ? (<Grid textAlign={"center"}><Loading/></Grid>) : (
                <div className={"is-flex is-justify-content-center"}>
                    <Grid alignItems={"center"} justifyContent={"center"} display={"flex"}
                          flexDirection={"column"}>
                        {finalMeme && <Box
                            mt={2}
                            mb={2}
                            component="img"
                            alt="Generated Meme"
                            src={finalMeme.url}
                            height={"auto"}
                            width={"100%"}
                        />}
                        <ButtonGroup>
                            <Button variant="contained" color="primary"
                                    onClick={() => navigate("/")}>
                                Go Back Home
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </div>
            )}
        </>
    );
};

export default Created;
