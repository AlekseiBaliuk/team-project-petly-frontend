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
} from './NewsList.styled';

export const NewsList = ({ news }) => {
  const message = 'We have any news for you';
  const titleLength = 45;
  const descriptLength = 220;

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
          })
        : message}
    </News>
  );
};
