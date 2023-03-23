import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/notices/noticesSelectors';
import { fetchNotices } from 'redux/notices/noticesOperations';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { Grid } from './NoticeCategoryList.styled';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hooks/useAuth';
import { CleaningServices } from '@mui/icons-material';

const { selectNotices, selectLoadingStatus, selectErrorMessage } = selectors;

export const NoticeCategoryList = () => {
  const noticesList = useSelector(selectNotices);
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorMessage);
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchNotices());
    };
    fetch();
  }, [dispatch]);

  let isFavorite = false;

  return (
    <>
      {error && <p>Not found</p>}
      {isLoading && <Loader />}
      <Grid>
        {noticesList.length > 0 &&
          noticesList.map(notice => {
            const isOwner = notice.owner._id === user.id;
            const index = notice.favorite.indexOf(user.id);

            if (index > -1) {
              isFavorite = true;
            } else isFavorite = false;

            return (
              <NoticeCategoryItem
                key={notice._id}
                fetch={notice}
                isOwner={isOwner}
                isFavorite={isFavorite}
              />
            );
          })}
      </Grid>
    </>
  );
};
