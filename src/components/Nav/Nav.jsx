import * as SC from './Nav.styled';

export const Nav = () => {
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem>
          <SC.Link to="/news">News</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/notices/sell">Find pet</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/friends">Our friends</SC.Link>
        </SC.ListItem>
      </SC.List>
    </SC.Nav>
  );
};
