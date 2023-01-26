import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { Form, Field, Input, Button } from './ContactForm.styled';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    contacts.find(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    )
      ? toast.error(`${form.elements.name.value} is already in contacts.`)
      : dispatch(
          addContact({
            name: form.elements.name.value,
            number: form.elements.number.value,
          })
        ) && form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          required
        />
      </Field>
      <Field>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()}
          required
        />
      </Field>
      <Button type="submit">Add contact</Button>
      <Toaster position="top-right" />
    </Form>
  );
};
