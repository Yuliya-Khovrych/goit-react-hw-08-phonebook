import { Header } from '../AppBar/AppBar.styled';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import {useSelector} from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const AppBar = () => {
 const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
