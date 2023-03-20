import EllipsisText from 'react-ellipsis-text';
import { format } from 'date-fns';
import {
  News,
  NewsCard,
  NewsTitle,
  NewsDescription,
  NewsMoreInfo,
  NewsDate,
  NewsLink,
} from './NewsList.styled';

export const NewsList = ({ news }) => {
  const message = 'We have any news for you';
  const titleLength = 38;
  const descriptLength = 215;

  const sortNews = news.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  return (
    <News>
      {sortNews.length > 0
        ? sortNews.map(({ _id, title, url, description, date }) => {
            const formatDate = format(new Date(date), 'dd/MM/yyyy');
            return (
              <NewsCard key={_id}>
                <NewsTitle>
                  <EllipsisText text={title} length={titleLength} />
                </NewsTitle>
                <NewsDescription>
                  <EllipsisText text={description} length={descriptLength} />
                </NewsDescription>
                <NewsMoreInfo>
                  {date === null ? (
                    <NewsDate>no date</NewsDate>
                  ) : (
                    <NewsDate>{formatDate}</NewsDate>
                  )}
                  <NewsLink href={url} target="_blank">
                    Read more
                  </NewsLink>
                </NewsMoreInfo>
              </NewsCard>
            );
          })
        : message}
    </News>
  );
};
