import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'store/contacts';
import { selectContacts } from 'store/contacts/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Title, SubTitle, MessageEmptyList } from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {!!contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <MessageEmptyList>
          Unfortunately, there is no contact here. Please enter your first
          contact
        </MessageEmptyList>
      )}
    </Container>
  );
};
