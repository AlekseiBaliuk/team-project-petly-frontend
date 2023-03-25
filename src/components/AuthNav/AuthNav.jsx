import * as SC from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem>
          <SC.Link to="/login">Login</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/register">Registration</SC.Link>
        </SC.ListItem>
      </SC.List>
    </SC.Nav>
  );
};
