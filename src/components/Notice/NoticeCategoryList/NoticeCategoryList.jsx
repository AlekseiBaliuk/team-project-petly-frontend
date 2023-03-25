import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/notices/noticesSelectors';
import { fetchNotices, getFavorites } from 'redux/notices/noticesOperations';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { Grid } from './NoticeCategoryList.styled';
// import { Loader } from 'components/Loader/Loader';

const {
  selectNotices,
  // selectLoadingStatus,
  // selectErrorMessage,
} = selectors;

export const NoticeCategoryList = ({ search, category }) => {
  const noticesList = useSelector(selectNotices);
  // const isLoading = useSelector(selectLoadingStatus);
  // const error = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const categoryLocal = await localStorage.getItem('categoryLocal');
      console.log('categoryLocal:', categoryLocal);
      // console.log('category:', category);

      localStorage.getItem('categoryLocal') === 'null'
        ? await dispatch(fetchNotices(category))
        : await dispatch(fetchNotices(categoryLocal.replace(/['"]+/g, '')));

      // if (category === 'sell') {
      //   (await categoryLocal) === null
      //     ? dispatch(fetchNotices('sell'))
      //     : dispatch(fetchNotices(categoryLocal.replace(/['"]+/g, '')));
      // }
    };
    fetch();
  }, [category, dispatch]);

  function filterNotice() {
    if (search.length === 0) {
      return noticesList;
    }

    const normalizeSearch = search.toLocaleLowerCase();
    const filterList = noticesList.filter(({ title }) =>
      title.toLowerCase().includes(normalizeSearch),
    );
    return filterList;
  }

  const filterNoticeList = filterNotice();

  return (
    <>
      {/* {error && <p>Not found</p>} */}
      {/* {isLoading && <Loader />} */}
      <Grid>
        {filterNoticeList.length > 0 &&
          filterNoticeList.map(notice => {
            return <NoticeCategoryItem key={notice._id} fetch={notice} />;
          })}
      </Grid>
    </>
  );
};
