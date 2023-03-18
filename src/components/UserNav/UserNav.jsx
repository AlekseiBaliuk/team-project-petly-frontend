import * as SC from './UserNav.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserNav = () => {
  return (
    <SC.Nav>
      <SC.Link to="/user">
        <AccountCircleIcon sx={{ fontSize: 20, marginRight: '12px' }} />
        <p>Account</p>
      </SC.Link>
    </SC.Nav>
  );
};
