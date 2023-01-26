import { Nav, Link } from '../Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Nav>
  );
};
