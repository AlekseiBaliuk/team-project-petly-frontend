import * as SC from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <SC.List>
        <SC.ListItem>
          <SC.Link to="/login">Login</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/register">Registartion</SC.Link>
        </SC.ListItem>
      </SC.List>
    </nav>
  );
};
