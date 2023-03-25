import React from 'react';
import { Link } from 'react-router-dom';

import { AuthTitle } from '../../components/AuthTitle/AuthTitle';
import { Wrapper, Container, Login } from '../RegisterPage/RegisterPage.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <AuthTitle text="Login" />
        <LoginForm />
        <Login>
          Don't have an account? <Link to="/register">Register</Link>
        </Login>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
