import React, { useEffect, useState } from 'react';
import { updateUserData } from 'redux/user/userOperations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';
import parseISO from 'date-fns/parseISO';

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
    // console.log('editedValue:', editedValue);
    if (!editedValue) {
      setActiveBtn(true);
      setIsEditing(false);
      return;
    }
    if (!paramValid.test(editedValue)) {
      Notify.failure(`Invalid ${nameInput}. Please, try again.`);
      return;
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
        console.log('we are here');
        dispatch(
          updateUserData({
            [nameInput]: editedValue,
          }),
        );
      }
    }
  };

  // if (isEditing && nameInput === 'birthday')
  //   setEditedValue(format(parseISO(valueUser), 'dd.MM.yyy'));

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

UserDataItem.propTypes = {
  typeInput: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  valueUser: PropTypes.string,
  activeBtn: PropTypes.bool,
  setActiveBtn: PropTypes.func,
  paramValid: PropTypes.instanceOf(RegExp),
  min: PropTypes.string,
  max: PropTypes.string,
};
