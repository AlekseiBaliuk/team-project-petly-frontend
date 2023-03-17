import * as SC from './UserNav.styled';

export const UserNav = () => {
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem>
          <SC.Link to="/user">Account</SC.Link>
        </SC.ListItem>        
      </SC.List>
    </SC.Nav>
  );
};
