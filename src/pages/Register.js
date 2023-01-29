import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { register } from '../redux/auth/authOperation';

import {
  Form,
  Field,
  Input,
  Button,
} from '../components/ContactForm/ContactForm.styled';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(unwrapResult)
      .catch(() =>
        toast.error(`ERROR! User with the same name or email already exists.`)
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
    </>
  );
};

export default Register;
