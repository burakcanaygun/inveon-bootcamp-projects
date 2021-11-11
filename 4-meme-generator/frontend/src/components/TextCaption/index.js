import React from 'react';
import {Formik, Form, Field} from 'formik';
import {Button, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import captionValidation from "../../validation/captionValidation";
import {createMemeAsync} from "../../features/memes/memesAPI";
import {useNavigate} from "react-router-dom";

const TextCaption = () => {
    const dispatch = useDispatch();
    // push user to the /created page
    const navigate = useNavigate();
    const meme = useSelector(state => state.memes.meme);

    return (
        <Grid display={"flex"} alignItems={"center"} justifyContent={"center"} textAlign={"center"}>
            <Formik initialValues={{
                id: meme.id,
                text0: '',
                text1: '',
            }} validationSchema={captionValidation} onSubmit={values => {
                dispatch(createMemeAsync(values));
                navigate('/created');
            }}>
                {({errors, touched}) => (
                    <Form style={{display: "grid"}}>
                        <Field name="text0" type="text" placeholder="Text 0"/>
                        {errors.text0 && touched.text0 ? (
                            <div>{errors.text0}</div>
                        ) : null}
                        <Field name="text1" type="text" placeholder="Text 1"/>
                        {errors.text1 && touched.text1 ? (
                            <div>{errors.text1}</div>
                        ) : null}
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Form>
                )}

            </Formik>
        </Grid>
    );
};

export default TextCaption;
