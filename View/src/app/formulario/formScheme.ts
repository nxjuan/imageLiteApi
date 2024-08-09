import * as Yup from 'yup'

export interface FormProps{
    name: string;
    tags: string;
    file: any;
}

export const formScheme: FormProps = {name: '', tags: '', file: ''}

export const formValidationScheme = Yup.object().shape({
    name: Yup.string().trim().required('Name is Required!').max(50, 'Name has the limit of 50 characters!'),

    tags: Yup.string().trim().required('Tags are required!').max(50, 'Tags has the limit of 50 characters!'),

    file: Yup.string().trim().required('File is required!')
})