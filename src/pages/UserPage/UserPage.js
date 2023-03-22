import React from 'react';
import UserData from 'components/UserPage/UserData/UserData';
import PetsData from 'components/UserPage/PetsData/PetsData';
import { UserPageWrapper } from './UserPage.styled';
import { Container } from '../../components/Container/Container.styled';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getUserData } from 'redux/user/userSelectors';
// import { getPets } from 'redux/pets/petsSelectors';
// import { getPetInfo } from 'redux/pets/petsOperations';

const UserPage = () => {
  const user = useSelector(getUserData);
  // const pets = useSelector(getPets);
  const pets = [];

  return (
    <Container>
      <UserPageWrapper>
        <UserData user={user} />
        <PetsData pets={pets} />
      </UserPageWrapper>
    </Container>
  );
};

export default UserPage;
