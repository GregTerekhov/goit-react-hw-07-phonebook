import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'store/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactItem id={id} name={name} number={number} />
        </ListItem>
      ))}
    </List>
  );
};
