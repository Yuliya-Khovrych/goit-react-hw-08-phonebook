import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { logIn } from '../redux/auth/authOperation';

import {
  Form,
  Field,
  Input,
  Button,
} from '../components/ContactForm/ContactForm.styled';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(unwrapResult)
      .catch(() =>
        toast.error(`ERROR! Check your email or password and try again.`)
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
    </>
  );
};

export default Login;
