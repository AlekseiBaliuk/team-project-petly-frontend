import React from 'react';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { UserPageWrapper } from './UserPage.styled';

const UserPage = () => {
  return (
    <UserPageWrapper>
      <UserData
      // user={user}
      />
      <PetsData
      // pets={pets}
      />
    </UserPageWrapper>
  );
};

export default UserPage;
