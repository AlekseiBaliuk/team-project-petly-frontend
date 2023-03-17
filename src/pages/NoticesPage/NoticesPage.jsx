import React from 'react';
import { Container } from 'components/Container/Container.styled';
import NoticeCategoryList from 'components/Notice/NoticeCategoryList';
import { Title } from './NoticesPage.styled';

const NoticesPage = () => {
  return (
    <section>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticeCategoryList />
      </Container>
    </section>
  );
};

export default NoticesPage;
