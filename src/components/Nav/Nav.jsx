import { useDispatch } from 'react-redux';

import { updateCategory } from 'redux/pets/petsSlice';

import * as SC from './Nav.styled';

export const Nav = () => {
  const dispatch = useDispatch();
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem>
          <SC.Link to="/news">News</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link
            to="/notices"
            onClick={() => {
              dispatch(updateCategory('sell'));
            }}
          >
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
