import * as SC from './Nav.styled';

export const Nav = () => {
  const local = async () => {
    await localStorage.setItem('categoryLocal', null);
  };
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem>
          <SC.Link to="/news">News</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/notices/sell" onClick={() => local()}>
            Find pet
          </SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/friends">Our friends</SC.Link>
        </SC.ListItem>
      </SC.List>
    </SC.Nav>
  );
};
