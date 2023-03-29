import React, { useEffect, useRef, useState } from 'react';
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

  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
    location: null,
    phone: null,
    birthday: null,
    avatarURL: null,
  });

  useEffect(() => {
    setUser(prevUser => {
      const newUser = { ...prevUser };

      if (id !== undefined && prevUser.id !== id) {
        newUser.id = id;
      }
      if (name !== undefined && prevUser.name !== name) {
        newUser.name = name;
      }
      if (email !== undefined && prevUser.email !== email) {
        newUser.email = email;
      }
      if (location !== undefined && prevUser.location !== location) {
        newUser.location = location;
      }
      if (phone !== undefined && prevUser.phone !== phone) {
        newUser.phone = phone;
      }
      if (birthday !== undefined && prevUser.birthday !== birthday) {
        newUser.birthday = birthday;
      }
      if (avatarURL !== undefined && prevUser.avatarURL !== avatarURL) {
        newUser.avatarURL = avatarURL;
      }

      return newUser;
    });
  }, [id, name, email, location, phone, birthday, avatarURL]);

  const [activeBtn, setActiveBtn] = useState(true);
  const updateBtn = useRef(null);
  const dispatch = useDispatch();

  const [ava, setAva] = useState();
  useEffect(() => {
    if (avatarURL !== undefined && avatarURL !== ava) {
      setAva(avatarURL);
    }
  }, [ava, avatarURL]);

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
          {ava ? (
            <AvatarImg src={ava} alt="uploaded" />
          ) : (
            <AvatarImg src={avatarURL} />
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
          {user.name ? (
            <UserDataItem
              userId={user.id}
              typeInput="name"
              nameInput="name"
              valueUser={user.name}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.nameRegexp}
            />
          ) : (
            <UserDataItem
              typeInput="name"
              nameInput="name"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>Email:</UserInfoTitle>
          {user.email ? (
            <UserDataItem
              typeInput="email"
              nameInput="email"
              valueUser={user.email}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.email}
            />
          ) : (
            <UserDataItem
              typeInput="email"
              nameInput="email"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>Birthday:</UserInfoTitle>
          {user.birthday ? (
            <UserDataItem
              typeInput="date"
              nameInput="birthday"
              valueUser={user.birthday}
              // valueUser={() => birthdayDate()}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.bdayRegexp}
              min="1935-01-01"
              max="2015-12-31"
            />
          ) : (
            <UserDataItem
              typeInput="date"
              nameInput="birthday"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>Phone:</UserInfoTitle>
          {user.phone ? (
            <UserDataItem
              typeInput="phone"
              nameInput="phone"
              valueUser={user.phone}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.mobile}
            />
          ) : (
            <UserDataItem
              typeInput="phone"
              nameInput="phone"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>City:</UserInfoTitle>
          {user.location ? (
            <UserDataItem
              typeInput="text"
              nameInput="location"
              valueUser={user.location}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.location}
            />
          ) : (
            <UserDataItem
              typeInput="text"
              nameInput="location"
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
