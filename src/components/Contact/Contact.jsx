import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { Button } from '../ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {name}: {number}
      <Button onClick={() => dispatch(deleteContact(id))} type="submit">
        Delete
      </Button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};