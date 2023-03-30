import ellipsize from 'ellipsize';
import { format } from 'date-fns';
import {
  News,
  NewsCard,
  NewsTitle,
  NewsDescription,
  NewsMoreInfo,
  NewsDate,
  NewsLink,
  Message,
} from './NewsList.styled';

export const NewsList = ({ news }) => {
  const titleLength = 45;
  const descriptLength = 220;
  const message = 'We have no news for you';

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
    <>
      <News>
        {sortNews.length > 0 &&
          sortNews.map(({ _id, title, url, description, date }) => {
            const formatDate = format(new Date(date), 'dd/MM/yyyy');
            return (
              <NewsCard key={_id}>
                <NewsTitle>
                  {ellipsize(title, titleLength, { chars: ' ' })}
                </NewsTitle>
                <NewsDescription>
                  {ellipsize(description, descriptLength, { chars: ' ' })}
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
          })}
      </News>
      {sortNews.length === 0 && <Message>{message}</Message>}
    </>
  );
};
