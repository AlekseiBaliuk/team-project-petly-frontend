import React, { useEffect, useState } from 'react';
import { updateUserData } from 'redux/user/userOperations';
import { useDispatch } from 'react-redux';

import {
  Input,
  UpdateBtn,
  InputWrapper,
  PencilBtn,
  DeactivatedBtn,
} from './UserDataItem.styled';
import { Notify } from 'notiflix';

const UserDataItem = ({
  typeInput,
  nameInput,
  valueUser = '',
  activeBtn,
  setActiveBtn,
  paramValid,
  min,
  max,
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(valueUser);

  useEffect(() => {
    setEditedValue(valueUser);
  }, [valueUser]);

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

    if (!paramValid.test(editedValue)) {
      Notify.warning(`Invalid ${nameInput}`);
    } else {
      setActiveBtn(true);
      setIsEditing(false);
      if (nameInput === 'birthday') {
        setActiveBtn(true);
        setIsEditing(false);
        dispatch(
          updateUserData({
            [nameInput]: editedValue.split('-').reverse().join('.'),
          }),
        );
      } else {
        dispatch(
          updateUserData({
            [nameInput]: editedValue,
          }),
        );
      }
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
