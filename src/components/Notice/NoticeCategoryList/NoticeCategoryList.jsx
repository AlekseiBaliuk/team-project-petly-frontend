import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/notices/noticesSelectors';
import { fetchNotices } from 'redux/notices/noticesOperations';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { Grid } from './NoticeCategoryList.styled';
import { Loader } from 'components/Loader/Loader';

const { selectNotices, selectLoadingStatus, selectErrorMessage } = selectors;

export const NoticeCategoryList = () => {
  const noticesList = useSelector(selectNotices);
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchNotices());
    };
    fetch();
  }, [dispatch]);

  return (
    <>
      {error && <p>Not found</p>}
      {isLoading && <Loader />}
      <Grid>
        {noticesList.length > 0 &&
          noticesList.map(item => {
            return <NoticeCategoryItem key={item._id} fetch={item} />;
          })}
      </Grid>
    </>
  );
};
