import React, { useEffect, useState } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import { theme } from '../../constants';
import { device } from '../../devices';

const Input = styled(Field)`
  color: ${theme.colors.inputText};
  font-size: ${theme.fontSizes.fs14};
  background: ${props =>
    props.errors ? 'rgba(255, 164, 122, 0.034) ' : theme.colors.white};
  width: 280px;
  height: 40px;
  border-radius: ${theme.radii.br20};
  padding: 0px 14px;
  display: flex;
  margin: 0 auto 24px auto;

  transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover,
  &:active {
    border: ${theme.borders.accent};
    box-shadow: 0 0 0 0.15rem rgba(245, 146, 86, 0.5);
    outline: none;
  }

  @media ${device.tablet} {
    width: 448px;
    height: 52px;
    border-radius: 26px;
    font-size: ${theme.fontSizes.fs18};
    padding: 0px 32px;
    margin: 0 auto 39px auto;
  }
`;

const CustomField = props => {
  const [isError, setIsError] = useState(false);
  const { errors, name, touched } = props;

  useEffect(() => {
    if (
      Object.keys(errors).includes(name) &&
      Object.keys(touched).includes(name)
    ) {
      return setIsError(true);
    }

    return setIsError(false);
  }, [errors, name, touched]);
  return (
    <Input
      {...props}
      style={{
        border: isError ? theme.borders.accent : theme.borders.auth,
        background: isError
          ? 'rgba(255, 164, 122, 0.034) '
          : theme.colors.white,
      }}
    />
  );
};
export default CustomField;
