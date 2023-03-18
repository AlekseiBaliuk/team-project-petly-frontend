import React from 'react';
import { Container } from 'components/Container/Container.styled';
import NoticesCategoriesNav from 'components/Notice/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notice/AddNoticeButton';
import NoticeCategoryList from 'components/Notice/NoticeCategoryList';

import { Title, PetSearchNav } from './NoticesPage.styled';

const NoticesPage = () => {
  return (
    <main>
      <section>
        <Container>
          <Title>Find your favorite pet</Title>
          <PetSearchNav>
            <NoticesCategoriesNav />
            <AddNoticeButton />
          </PetSearchNav>
          <NoticeCategoryList />
        </Container>
      </section>
    </main>
  );
};

export default NoticesPage;
