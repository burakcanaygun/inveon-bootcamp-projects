import * as Yup from 'yup';

const captionValidation = Yup.object().shape({
    text0: Yup.string()
        .min(1, 'Text is required')
        .max(100, 'Text is too long')
        .required('Text is required'),
    text1: Yup.string()
        .min(1, 'Text is required')
        .max(100, 'Text is too long')
        .required('Text is required'),
});

export default captionValidation;
