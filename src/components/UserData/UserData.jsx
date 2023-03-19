import React from 'react';
import { UserWrapper, UserDataWrapper, UserDataTitle } from './UserData.styled';
// import { Logout } from 'components/Logout/Logout';
import UserDataList from '../UserDataList/UserDataList';

export default function UserData() {
  return (
    <UserWrapper>
      <UserDataTitle>Test Title</UserDataTitle>
      <UserDataWrapper>
        <UserDataList />
        {/*<Logout />*/}
      </UserDataWrapper>
    </UserWrapper>
  );
}
