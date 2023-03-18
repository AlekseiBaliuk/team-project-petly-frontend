import React from 'react';
import { Container } from 'components/Container/Container.styled';
import NoticeCategoryList from 'components/Notice/NoticeCategoryList';
import AddNoticeButton from 'components/Notice/AddNoticeButton';

import { Title } from './NoticesPage.styled';

const NoticesPage = () => {
  return (
    <main>
      <section>
        <Container>
          <Title>Find your favorite pet</Title>
          <AddNoticeButton />
          <NoticeCategoryList />
        </Container>
      </section>
    </main>
  );
};

export default NoticesPage;
