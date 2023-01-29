import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/authOperation';
import { selectRegisterError } from '../redux/auth/authSelectors';
import {
  Form,
  Field,
  Input,
  Button,
  ErrorText,
} from '../components/ContactForm/ContactForm.styled';

const Register = () => {
  const dispatch = useDispatch();
  const errorRegister = useSelector(selectRegisterError);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <>
      <h2>Register, please...</h2>
      <Form onSubmit={handleSubmit}>
        <Field>
          Username
          <Input type="text" name="name" placeholder="Enter your username..." />
        </Field>
        <Field>
          Email
          <Input type="email" name="email" placeholder="Enter your email..." />
        </Field>
        <Field>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
        </Field>
        <Button type="submit">Register</Button>
      </Form>
      {errorRegister && (
        <ErrorText>
          ERROR! User with the same name or email already exists.
        </ErrorText>
      )}
    </>
  );
};

export default Register;
