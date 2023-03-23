import React, { useRef, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { useUser } from 'hooks/useUser';
import UserDataItem from 'components/UserPage/UserDataItem/UserDataItem';
import { updateUserData } from 'redux/user/userOperations';
import editAvatar from 'staticImages/userPage/editAvatar.svg';
import { regExp } from 'helpers/regExp';

const UserDataList = () => {
  const {
    userData: { id, name, email, location, phone, birthday, avatarURL },
  } = useUser();
  const [activeBtn, setActiveBtn] = useState(true);
  const updateBtn = useRef(null);
  const dispatch = useDispatch();

  const [ava, setAva] = useState(null);
  const onButtonClick = e => {
    e.preventDefault();
    updateBtn.current.click();
  };

  const handleChange = e => {
    e.preventDefault();
    const av = URL.createObjectURL(e.target.files[0]);
    const data = new FormData();
    data.append('image', e.target.files[0]);
    setAva(av);
    dispatch(updateUserData(data));
  };

  return (
    <>
      <AvatarInfoWrapper>
        <FormWrapper id="userAvatar" encType="multipart/form-data">
          <InputEditPhoto
            type="file"
            name="userAvatar"
            accept=".png, .jpg, .jpeg"
            placeholder="Edit photo"
            onChange={handleChange}
            ref={updateBtn}
          />
          {avatarURL ? (
            <AvatarImg src={avatarURL} alt="uploaded" />
          ) : (
            <AvatarImg src={ava} />
          )}
          <LabelEditPhoto type="button" onClick={onButtonClick}>
            <SVG src={editAvatar} />
            Edit photo
          </LabelEditPhoto>
        </FormWrapper>
      </AvatarInfoWrapper>
      <UserInfoList>
        <UserInfoItem>
          <UserInfoTitle>Name:</UserInfoTitle>
          {name ? (
            <UserDataItem
              userId={id}
              typeInput="name"
              nameInput="name"
              valueUser={name}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.nameRegexp}
            />
          ) : (
            <UserDataItem
              typeInput="name"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>Email:</UserInfoTitle>
          {email ? (
            <UserDataItem
              typeInput="email"
              nameInput="email"
              valueUser={email}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.email}
            />
          ) : (
            <UserDataItem
              typeInput="email"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>Birthday:</UserInfoTitle>
          {birthday ? (
            <UserDataItem
              typeInput="date"
              nameInput="birthday"
              valueUser={birthday}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              pattern={regExp.bdayRegexp}
              min="1935-01-01"
              max="2015-12-31"
            />
          ) : (
            <UserDataItem
              typeInput="date"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>Phone:</UserInfoTitle>
          {phone ? (
            <UserDataItem
              typeInput="phone"
              nameInput="phone"
              valueUser={phone}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              pattern={regExp.bdayRegexp}
            />
          ) : (
            <UserDataItem
              typeInput="phone"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>City:</UserInfoTitle>
          {location ? (
            <UserDataItem
              typeInput="text"
              nameInput="location"
              valueUser={location.split(',').splice(0, 1)}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.location}
            />
          ) : (
            <UserDataItem
              typeInput="text"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>
      </UserInfoList>
    </>
  );
};

export default UserDataList;
