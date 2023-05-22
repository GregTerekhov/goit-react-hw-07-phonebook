import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/contacts/selectors';
import { selectFilter } from 'store/filter/selectors';
import { selectFilteredContacts } from 'store/selectors';
import * as operations from 'store/contacts/operations';
import * as actions from 'store/filter/filter-reducer';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  //   const error = useSelector(selectError);
  //   const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const fetchContacts = useCallback(
    () => dispatch(operations.fetchContacts()),
    [dispatch]
  );
  const addContact = newContact => dispatch(operations.addContact(newContact));
  const deleteContact = id => dispatch(operations.deleteContact(id));

  const setFilter = value => dispatch(actions.setFilter(value));

  return {
    contacts,
    filter,
    filteredContacts,
    fetchContacts,
    addContact,
    deleteContact,
    setFilter,
  };
};
