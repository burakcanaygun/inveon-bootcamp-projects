import * as Yup from 'yup';

export const commentValidation = Yup.object().shape({
  body: Yup.string()
    .min(2, 'Comment must be at least 2 characters long')
    .max(500, 'Comment must be less than 500 characters long')
    .required('Comment is required'),
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters long')
      .max(50, 'Name must be less than 50 characters long')
      .required('Name is required'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
});