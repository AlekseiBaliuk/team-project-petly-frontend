import React from 'react';
import { useEffect, useState } from 'react';
import { getNews } from 'services';

import { NewsList } from 'components/NewsList/NewsList';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Search } from 'components/Search/Search';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/Container/Container.styled';
import { NewsPageBox } from './NewsPage.styled';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);

      try {
        const response = await getNews();
        if (response.length !== 0) {
          setNews(response);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, []);

  function searchNews() {
    if (filter.length === 0) {
      return news;
    }

    const normalizeFilter = filter.toLocaleLowerCase();
    const filterNews = news.filter(({ title }) =>
      title.toLowerCase().includes(normalizeFilter),
    );
    return filterNews;
  }

  return (
    <NewsPageBox>
      <Container>
        <PageTitle>News</PageTitle>
        <Search sendSearch={setFilter} />
        {news.length > 0 && <NewsList news={searchNews()} />}
        {isLoading && <Loader />}
      </Container>
    </NewsPageBox>
  );
};

export default NewsPage;
