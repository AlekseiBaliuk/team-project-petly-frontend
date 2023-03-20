import React, { Fragment, useState } from 'react';
import { ErrorMessage } from 'formik';

import CustomField from '../../../CustomAuthField';
import styled from 'styled-components';

const Icon = styled.span`
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  background: red;
`;

const RegisterFormStepOne = props => {
  const [showPassword, setShowPassword] = useState(false);

  const { errors } = props;
  return (
    <Fragment>
      <label>
        <CustomField
          id="email"
          name="email"
          label="email"
          placeholder="email"
          errors={errors}
          touched={{}}
        />
        <ErrorMessage name="email" component="div" />
      </label>
      <Icon onClick={() => setShowPassword(!showPassword)} />
      <CustomField
        id="password"
        type={showPassword ? 'text' : 'password'}
        // type="password"
        name="password"
        label="password"
        placeholder="password"
        errors={errors}
        touched={{}}
      />
      <CustomField
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        label="confirmPassword"
        placeholder="confirm password"
        errors={errors}
        touched={{}}
      />
    </Fragment>
  );
};

export default RegisterFormStepOne;
