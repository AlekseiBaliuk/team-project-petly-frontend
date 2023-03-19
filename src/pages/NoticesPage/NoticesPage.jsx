import React from 'react';
import { Container } from 'components/Container/Container.styled';
import NoticesCategoriesNav from 'components/Notice/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notice/AddNoticeButton';
import NoticeCategoryList from 'components/Notice/NoticeCategoryList';

import { Title, PetSearchNav, Main } from './NoticesPage.styled';

const NoticesPage = () => {
  return (
    <Main>
      <section>
        <Container>
          <Title>Find your favorite pet</Title>
          <PetSearchNav>
            <AddNoticeButton />
            <NoticesCategoriesNav />
          </PetSearchNav>
          <NoticeCategoryList />
        </Container>
      </section>
    </Main>
  );
};

export default NoticesPage;
