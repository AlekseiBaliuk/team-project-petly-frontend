import React from 'react';
import UserData from 'components/UserPage/UserData/UserData';
import PetsData from 'components/UserPage/PetsData/PetsData';
import { UserPageWrapper } from './UserPage.styled';
import { Container } from '../../components/Container/Container.styled';

const UserPage = () => {
  return (
    <section>
      <Container>
        <UserPageWrapper>
          <UserData />
          <PetsData />
        </UserPageWrapper>
      </Container>
    </section>
  );
};

export default UserPage;
