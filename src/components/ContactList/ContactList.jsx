import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { List, Item } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact id={id} name={name} number={number} />
        </Item>
      ))}
    </List>
  );
};
