import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contacts/operations';
import PropTypes from 'prop-types';
import { SearchButton } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      {name}: {number}
      <SearchButton type="button" onClick={() => dispatch(deleteContact(id))}>
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
