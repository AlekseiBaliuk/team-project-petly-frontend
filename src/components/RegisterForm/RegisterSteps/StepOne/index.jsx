import React, { Fragment, useState } from 'react';

import { Icon, Label, ValidationMessage } from './stepOne.styled';
import CustomField from '../../../CustomAuthField';
import eyeClosed from 'staticImages/eye-closed.png';
import eyeOpen from 'staticImages/eye-open.png';

const RegisterFormStepOne = props => {
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [spanBgIcon, setSpanBgIcon] = useState(eyeOpen);
  const [spanConfirmBgIcon, setSpanConfirmBgIcon] = useState(eyeOpen);

  function handleToggleBtn(event) {
    if (event.currentTarget.id === 'passwordEye') {
      if (passwordType === 'text') {
        setPasswordType('password');
        setSpanBgIcon(eyeOpen);
      } else {
        setPasswordType('text');
        setSpanBgIcon(eyeClosed);
      }
    } else {
      if (confirmPasswordType === 'text') {
        setConfirmPasswordType('password');
        setSpanConfirmBgIcon(eyeOpen);
      } else {
        setConfirmPasswordType('text');
        setSpanConfirmBgIcon(eyeClosed);
      }
    }
  }

  const { errors, touched } = props;

  return (
    <Fragment>
      <Label>
        <CustomField
          id="email"
          name="email"
          label="email"
          placeholder="email"
          errors={errors}
          touched={touched}
        />
        <ValidationMessage name="email" component="div" />
      </Label>

      <Label>
        <Icon
          url={spanBgIcon}
          id="passwordEye"
          onClick={event => handleToggleBtn(event)}
        />
        <CustomField
          id="password"
          type={passwordType}
          name="password"
          label="password"
          placeholder="password"
          errors={errors}
          touched={touched}
        />

        <ValidationMessage name="password" component="div" />
      </Label>
      <Label>
        <Icon
          url={spanConfirmBgIcon}
          id="confirmPassword"
          onClick={event => handleToggleBtn(event)}
        />
        <CustomField
          id="confirmPassword"
          type={confirmPasswordType}
          name="confirmPassword"
          label="confirmPassword"
          placeholder="confirm password"
          errors={errors}
          touched={touched}
        />
        <ValidationMessage name="confirmPassword" component="div" />
      </Label>
    </Fragment>
  );
};

export default RegisterFormStepOne;
