import React from 'react';
import { Container } from 'components/Container/Container.styled';
import { NewsList } from 'components/NewsList/NewsList';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { NewsPageBox } from './NewsPage.styled';
import { Search } from 'components/Search/Search';

const NewsPage = () => {
  return (
    <NewsPageBox>
      <section>
        <Container>
          <PageTitle text="News" />
          <Search />
          <NewsList />
        </Container>
      </section>
    </NewsPageBox>
  );
};

export default NewsPage;
