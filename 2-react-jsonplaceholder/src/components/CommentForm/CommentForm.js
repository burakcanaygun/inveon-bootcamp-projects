import React from 'react'
import { Formik, Form, Field } from 'formik';
import { commentValidation } from '../../validation/commentValidation';
import { createCommentAsync } from '../../features/posts/postsAPI';
import { useDispatch } from 'react-redux';
import { Columns, Button } from 'react-bulma-components';

const CommentForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                body: ''
            }} validationSchema={commentValidation}
            onSubmit={(values, { resetForm }) => {
                dispatch(createCommentAsync(values));
                resetForm({ values: '' });
            }}>
            {({ errors, touched }) => (

                <Form>
                    <Columns centered multiline className={"p-2"}>
                        <Columns.Column size={12}>
                            <Field name={"name"} placeholder={"Name"} className={"input"} />
                            {errors.name && touched.name ? <div className={"help is-danger"}>{errors.name}</div> : null}
                            <Field name={"email"} placeholder={"Email"} className={"input"} />
                            {errors.email && touched.email ? <div className={"help is-danger"}>{errors.email}</div> : null}
                        </Columns.Column>
                        <Columns.Column size={12}>
                            <Field as={"textarea"} name={"body"} placeholder={"Your Comment"} className={"textarea"} />
                            {errors.body && touched.body ? <div className={"help is-danger"}>{errors.body}</div> : null}
                        </Columns.Column>
                        <Columns.Column size={12}>
                            <Button.Group align={"right"}>
                                <Button type="submit" color={"info"}>Submit Comment</Button>
                            </Button.Group>
                        </Columns.Column>
                    </Columns>
                </Form>

            )
            }
        </Formik >

    )
}

export default CommentForm
