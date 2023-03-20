import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { Container } from 'components/Container/Container.styled';
import { NewsList } from 'components/NewsList/NewsList';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { NewsPageBox } from './NewsPage.styled';
import { Search } from 'components/Search/Search';

// запит
axios.defaults.baseURL = 'https://team-project-petly-backend.onrender.com/api';

export const getNews = async () => {
  const response = await axios.get('news');
  return response.data.news;
};
//

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchNews() {
      let response;
      try {
        response = await getNews();
        if (response.length !== 0) {
          setNews(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchNews();
  }, []);

  function searchNews() {
    if (filter.length === '') {
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
      <section>
        <Container>
          <PageTitle text="News" />
          <Search sendSearch={setFilter} />
          <NewsList news={searchNews()} />
        </Container>
      </section>
    </NewsPageBox>
  );
};

export default NewsPage;
