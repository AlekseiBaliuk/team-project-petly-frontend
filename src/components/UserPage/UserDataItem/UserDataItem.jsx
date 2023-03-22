import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {
  Input,
  UpdateBtn,
  InputWrapper,
  PencilBtn,
  DeactivatedBtn,
} from './UserDataItem.styled';
// import { getUserData, updateUserData } from 'redux/user/userSelectors';

const UserDataItem = ({
  typeInput,
  nameInput,
  valueUser,
  activeBtn,
  setActiveBtn,
  paramValid,
  min,
  max,
}) => {
  // const user = useSelector(getUserData);
  // const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(valueUser);
  const [error, setError] = useState(null);

  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(true);
    setActiveBtn(false);
  };

  const handleChange = e => {
    setEditedValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!editedValue) {
      setActiveBtn(true);
      setIsEditing(false);
      return;
    }
    const validInput = paramValid;

    if (nameInput === 'birthday') {
      setActiveBtn(true);
      setIsEditing(false);
      // dispatch(
      //   updateUserData({
      //     [nameInput]: editedValue,
      //   })
      // );
    }
    if (!validInput.test(editedValue)) {
      setError(`Invalid ${nameInput}`);
    } else {
      setError(null);

      setActiveBtn(true);
      setIsEditing(false);
      // dispatch(
      //   updateUserData({
      //     [nameInput]: editedValue,
      //   })
      // );
    }
  };

  return (
    <InputWrapper>
      {isEditing ? (
        <>
          <Input
            type={typeInput}
            name={nameInput}
            value={editedValue}
            onChange={handleChange}
            min={min}
            max={max}
          />
          <UpdateBtn onClick={handleSubmit} />
        </>
      ) : (
        <>
          <Input name={nameInput} value={valueUser} disabled />
          {activeBtn ? (
            <PencilBtn onClick={handleEdit} />
          ) : (
            <DeactivatedBtn disabled />
          )}
        </>
      )}
    </InputWrapper>
  );
};

export default UserDataItem;
