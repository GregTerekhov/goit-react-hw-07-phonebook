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
import { useContacts } from 'hooks/useContacts';

export const ContactForm = () => {
  const { contacts, addContact } = useContacts();

  const handleSubmit = (values, { resetForm }) => {
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    addContact({ ...values });
    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          number: '',
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
            <FormLabel htmlFor="number">
              Number
              <FormInput
                type="tel"
                name="number"
                placeholder="Please enter a phone number..."
                value={formik.values.number}
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
