import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'store/contacts/operations';
import { selectContacts } from 'store/contacts/selectors';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import {
  FormContainer,
  FormEl,
  FormLabel,
  FormInput,
  ErrorMessageForUser,
  FormButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ id: nanoid(), ...values }));
    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {formik => (
          <FormEl onSubmit={formik.handleSubmit}>
            <FormLabel htmlFor="name">
              Name
              <FormInput
                type="text"
                name="name"
                placeholder="Please enter name..."
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <ErrorMessageForUser name="name" component="div" />
            </FormLabel>
            <FormLabel htmlFor="phone">
              Number
              <FormInput
                type="tel"
                name="phone"
                placeholder="Please enter a phone number..."
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              <ErrorMessageForUser name="number" component="div" />
            </FormLabel>
            <FormButton type="submit" disabled={formik.isSubmitting}>
              Add contact
            </FormButton>
          </FormEl>
        )}
      </Formik>
    </FormContainer>
  );
};
