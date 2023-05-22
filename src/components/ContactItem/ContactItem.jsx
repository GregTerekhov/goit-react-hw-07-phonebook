import PropTypes from 'prop-types';
import { SearchButton } from './ContactItem.styled';
import { useContacts } from 'hooks/useContacts';

export const ContactItem = ({ id, name, number }) => {
  const { deleteContact } = useContacts();
  return (
    <>
      {name}: {number}
      <SearchButton type="button" onClick={() => deleteContact(id)}>
        Delete contact
      </SearchButton>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
