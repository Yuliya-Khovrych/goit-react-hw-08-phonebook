import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import { Section } from '../components/Section/Section';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const ContactsPhonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    isLoggedIn && (
      <Section>
        <h2>Phonebook</h2>
        <ContactForm />
        {contacts.length > 0 && <h2>Contacts</h2>}
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 && <ContactList />}
      </Section>
    )
  );
};

export default ContactsPhonebook;