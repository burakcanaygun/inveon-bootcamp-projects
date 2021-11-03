import React from 'react'
import { Formik, Form, Field } from 'formik';
import { postValidation } from '../../validation/postValidation';
import { useDispatch, useSelector } from 'react-redux';
import { createPostAsync } from '../../features/posts/postsAPI';
import { Button, Columns } from 'react-bulma-components';
import { postFormOpen } from '../../features/posts/postsSlice';
const CreatePostForm = () => {
    // use dispatch to trigger addSinglePost
    const dispatch = useDispatch();

    const isPostFormOpen = useSelector(state => state.posts.isPostFormOpen);

    
    return (
        <Formik initialValues={{
            title: '',
            body: '',
            userId: '',
        }} validationSchema={postValidation} onSubmit={(values, { resetForm }) => {
            dispatch(createPostAsync(values));
            resetForm({ values: '' })
        }}>
            {({ errors, touched }) => (
                <Form className={`box ${isPostFormOpen ? "is-active puff-in-center": "is-hidden"}`}>
                    <Button.Group align="right">
                        <Button className={"delete"} colorVariant={"dark"} onClick={() => {dispatch(postFormOpen())}} />
                    </Button.Group>
                    <Columns centered multiline className={"p-2"}>
                        <Columns.Column size={12}>
                            <Field name="userId" type="number" className={'input'} placeholder={"userId"} />
                            {errors.userId && touched.userId ? <div className={"help is-danger"}>{errors.userId}</div> : null}
                        </Columns.Column>
                        <Columns.Column size={12}>
                            <Field name="title" type="text" className={'input'} placeholder={"Post Title"} />
                            {errors.title && touched.title ? <div className={"help is-danger"}>{errors.title}</div> : null}
                        </Columns.Column>
                        <Columns.Column size={12}>
                            <Field as={"textarea"} name="body" type="text" className={'input'} placeholder={"Post Body"} />
                            {errors.body && touched.body ? <div className={"help is-danger"}>{errors.body}</div> : null}
                            <Button.Group align={"right pt-2"}>
                                <Button type="submit" color={"info"}>Submit Post</Button>
                            </Button.Group>
                        </Columns.Column>


                    </Columns>
                </Form>
            )}
        </Formik>
    )
}

export default CreatePostForm
