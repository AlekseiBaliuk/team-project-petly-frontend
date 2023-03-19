import * as SC from './UserNav.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserNav = () => {
  const iconSize = {
    fontSize: 20,
    '@media (min-width: 768px)': {
      fontSize: 28,
    },
  };

  return (
    <SC.Nav>
      <SC.Link to="/user">
        <AccountCircleIcon sx={{ ...iconSize, marginRight: '12px' }} />
        <p>Account</p>
      </SC.Link>
    </SC.Nav>
  );
};
