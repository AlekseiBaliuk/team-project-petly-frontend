import React, { useEffect, useState } from 'react';
import { updateUserData } from 'redux/user/userOperations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import 'react-datepicker/dist/react-datepicker.css';

import {
  Input,
  UpdateBtn,
  InputWrapper,
  PencilBtn,
  DeactivatedBtn,
  StyledDatePicker,
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
    if (nameInput === 'birthday') {
      setEditedValue(new Date(e).toLocaleDateString().split('T')[0]);
    } else {
      setEditedValue(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!editedValue) {
      setActiveBtn(true);
      setIsEditing(false);
      return;
    }

    if (!paramValid.test(editedValue) && nameInput !== 'birthday') {
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
      {isEditing && nameInput === 'birthday' && (
        <>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
              autoOk
              format="DD.MM.YYYY"
              fullWidth
              onChange={value => handleChange(value.$d)}
            />
          </LocalizationProvider>
          <UpdateBtn onClick={handleSubmit} />
        </>
      )}
      {isEditing && nameInput !== 'birthday' && (
        <>
          <Input
            id={nameInput}
            type={typeInput}
            name={nameInput}
            value={editedValue}
            onChange={handleChange}
            min={min}
            max={max}
          />
          <UpdateBtn onClick={handleSubmit} />
        </>
      )}
      {!isEditing && (
        <>
          <Input id={nameInput} name={nameInput} value={valueUser} disabled />
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
