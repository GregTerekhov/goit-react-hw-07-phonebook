import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from 'store/filter/selectors';
import { selectContacts } from 'store/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {getFilteredContacts().map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactItem id={id} name={name} number={number} />
        </ListItem>
      ))}
    </List>
  );
};
