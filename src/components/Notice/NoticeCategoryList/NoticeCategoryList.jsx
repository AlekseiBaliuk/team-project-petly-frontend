import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/notices/noticesSelectors';
import { fetchNotices, getFavorites } from 'redux/notices/noticesOperations';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { Grid } from './NoticeCategoryList.styled';
import { useAuth } from 'hooks/useAuth';
// import { Loader } from 'components/Loader/Loader';

const {
  selectNotices,
  // selectLoadingStatus,
  // selectErrorMessage,
} = selectors;

export const NoticeCategoryList = () => {
  const noticesList = useSelector(selectNotices);
  // const isLoading = useSelector(selectLoadingStatus);
  // const error = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchNotices());
      await dispatch(getFavorites());
    };
    fetch();
  }, [dispatch]);

  let isFavorite = false;

  return (
    <>
      {/* {error && <p>Not found</p>} */}
      {/* {isLoading && <Loader />} */}
      <Grid>
        {noticesList.length > 0 &&
          noticesList.map(notice => {
            isFavorite = isLoggedIn && notice.favorite.includes(user.id);

            return (
              <NoticeCategoryItem
                key={notice._id}
                fetch={notice}
                fav={isFavorite}
              />
            );
          })}
      </Grid>
    </>
  );
};
