import React from 'react';
import {
  FormWrapper,
  UserInfoList,
  UserInfoItem,
  UserInfoTitle,
  AvatarInfoWrapper,
  AvatarImg,
  LabelEditPhoto,
  InputEditPhoto,
  SVG,
} from './UserDataList.styled';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { regExp } from '../../helpers/regExp';

export default function UserDataList(
  {
    // dataUser
  },
) {
  const dataUser = {
    user: {
      _id: 1,
      name: 'User',
      email: 'test@test.com',
      birthday: '01.01.2000',
      phone: '+380111111111',
      address: 'Kyiv, Kyivska',
      avatarUrl:
        'https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg',
    },
  };
  const { _id, name, email, birthday, phone, address, avatarUrl } =
    dataUser.user;

  return (
    <>
      <AvatarInfoWrapper>
        <FormWrapper id="userAvatar" encType="multipart/form-data">
          <InputEditPhoto
            type="file"
            name="userAvatar"
            accept=".png, .jpg, .jpeg"
            placeholder="Edit photo"
          />
          {avatarUrl ? (
            <AvatarImg src={avatarUrl} alt="uploaded" />
          ) : (
            <AvatarImg src={AddAPhotoIcon} />
          )}
          <LabelEditPhoto type="button">
            <SVG src={AddAPhotoIcon} />
            Edit
          </LabelEditPhoto>
        </FormWrapper>
      </AvatarInfoWrapper>
      <UserInfoList>
        <UserInfoItem>
          <UserInfoTitle>User name</UserInfoTitle>
          {name ? (
            <UserDataItem
              userIdD={_id}
              typeInput="name"
              nameInput="name"
              valueUser={name}
              paramValid={regExp.nameRegexp}
            />
          ) : (
            <UserDataItem typeInput="name" />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>Email:</UserInfoTitle>
          {email ? (
            <UserDataItem
              typeInput="email"
              nameInput="email"
              valueUser={email}
              paramValid={regExp.email}
            />
          ) : (
            <UserDataItem typeInput="email" />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>User birthday</UserInfoTitle>
          {birthday ? (
            <UserDataItem
              typeInput="date"
              nameInput="birthday"
              valueUser={birthday.split('-').reverse().join('.')}
              pattern={regExp.bdayRegexp}
              min="1935-01-01"
              max="2015-12-31"
            />
          ) : (
            <UserDataItem typeInput="date" pattern={regExp.bdayRegexp} />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>User phone</UserInfoTitle>
          {phone ? (
            <UserDataItem
              typeInput="phone"
              nameInput="phone"
              valueUser={phone}
              paramValid={regExp.phoneRegexpUser}
            />
          ) : (
            <UserDataItem typeInput="phone" />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>User city</UserInfoTitle>
          {address ? (
            <UserDataItem
              typeInput="text"
              nameInput="address"
              valueUser={address.split(',').splice(0, 1)}
              paramValid={regExp.address}
            />
          ) : (
            <UserDataItem typeInput="text" />
          )}
        </UserInfoItem>
      </UserInfoList>
    </>
  );
}
