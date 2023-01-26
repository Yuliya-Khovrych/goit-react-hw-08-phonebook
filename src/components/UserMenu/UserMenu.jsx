import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperation';
import { User, UserText, UserButton } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <User>
      <UserText>{user.name}</UserText>
      <UserButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserButton>
    </User>
  );
};
