import PropTypes from 'prop-types';
import { ContactItem, ContactItems } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ContactItems>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}{' '}
            <button onClick={() => onDelete(id)} type="button">
              Delete
            </button>
          </ContactItem>
        ))}
      </ContactItems>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
