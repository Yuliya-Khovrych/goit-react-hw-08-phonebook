import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/auth/authOperation';

import { selectLoginError } from '../redux/auth/authSelectors';
import {
  Form,
  Field,
  Input,
  Button,
  ErrorText,
} from '../components/ContactForm/ContactForm.styled';

const Login = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(selectLoginError);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <>
      <h2>Log In, please...</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
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
        <Button type="submit">Log In</Button>
      </Form>
      {errorLogin && (
        <ErrorText>ERROR! Check your email and password or register.</ErrorText>
      )}
    </>
  );
};

export default Login;
