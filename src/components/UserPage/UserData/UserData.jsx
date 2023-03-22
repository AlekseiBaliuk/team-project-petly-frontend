import React, { useEffect } from 'react';
import { UserWrapper, UserDataWrapper, UserDataTitle } from './UserData.styled';
import Logout from '../Logout/Logout';
import UserDataList from '../UserDataList/UserDataList';
import { useDispatch } from 'react-redux';
import { getUserInfo } from 'redux/user/userOperations';

const UserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <UserWrapper>
      <UserDataTitle>My information:</UserDataTitle>
      <UserDataWrapper>
        <UserDataList />
        <Logout />
      </UserDataWrapper>
    </UserWrapper>
  );
};

export default UserData;
