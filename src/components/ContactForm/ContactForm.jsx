import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import PropTypes from 'prop-types';
import { FormButton, FormLabel, FormSpan } from "./ContactForm.styled";

const initialValues = {
    name: '',
    number: ''
}

const validationSchema = Yup.object({
    name: Yup.string().required(),
    number: Yup.number().required(),
})

export const ContactForm = ({onSubmit}) => { 
    const handleSubmit = (values, { resetForm }) => { 
        onSubmit(values);
        resetForm();
    }        
    
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}>
            <Form>            
                <FormLabel>
                    <FormSpan>Name</FormSpan>
                    <Field type="text" name='name' pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required />
                    <ErrorMessage name="name" />
                    <FormSpan>Number</FormSpan>
                    <Field type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required />  
                    <ErrorMessage name="number" />
                </FormLabel>
                <FormButton type="submit">add contact</FormButton>
            </Form>
        </Formik>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}





