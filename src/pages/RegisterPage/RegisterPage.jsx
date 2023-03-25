import React from 'react';
import { Link } from 'react-router-dom';

import { RegisterForm } from '../../components/RegisterForm/RegisterForm/RegisterForm';
import { Container, Wrapper, Login } from './RegisterPage.styled';
import { AuthTitle } from '../../components/AuthTitle/AuthTitle';

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <AuthTitle text="Registration" />
        <RegisterForm />
        <Login>
          Already have an account? <Link to="/login">Login</Link>
        </Login>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
