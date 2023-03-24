import React from 'react';
import UserData from 'components/UserPage/UserData/UserData';
import PetsData from 'components/UserPage/PetsData/PetsData';
import { UserPageWrapper } from './UserPage.styled';
import { Container } from '../../components/Container/Container.styled';
import { useUser } from 'hooks/useUser';

const UserPage = () => {
  const { userData, userPets } = useUser();

  return (
    <Container>
      <UserPageWrapper>
        <UserData user={userData} />
        <PetsData pets={userPets} />
      </UserPageWrapper>
    </Container>
  );
};

export default UserPage;
