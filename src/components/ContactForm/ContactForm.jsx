import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'store/contacts/contacts-reducer';
import { selectContacts } from 'store/contacts/selectors';
import { nanoid } from 'nanoid';
import { Formik, useFormik } from 'formik';
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
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, { resetForm }) => {
      const isExist = contacts.some(
        ({ name }) => name.toLowerCase() === values.name.toLowerCase()
      );

      if (isExist) {
        alert(`${values.name} is already in contacts.`);
        return;
      }
      dispatch(addContact({ id: nanoid(), ...values }));
      resetForm();
    },
    validationSchema: validationSchema,
  });

  return (
    <FormContainer>
      <Formik
        initialValues={formik.initialValues}
        validationSchema={formik.validationSchema}
        onSubmit={formik.onSubmit}
      >
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
      </Formik>
    </FormContainer>
  );
};
