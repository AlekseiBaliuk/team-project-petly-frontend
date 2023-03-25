import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCategory } from 'hooks/useCategory';
import selectors from 'redux/notices/noticesSelectors';
import {
  fetchNotices,
  getFavorites,
  getMyNotices,
} from 'redux/notices/noticesOperations';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { Grid } from './NoticeCategoryList.styled';

const { selectNotices, selectIsAdded } = selectors;

export const NoticeCategoryList = ({ search }) => {
  const noticesList = useSelector(selectNotices);
  const isAdded = useSelector(selectIsAdded);
  console.log(isAdded);

  const { activeCategory } = useCategory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      switch (activeCategory) {
        case 'favorite':
          await dispatch(getFavorites());
          break;
        case 'my-ads':
          await dispatch(getMyNotices());
          break;

        default:
          await dispatch(fetchNotices(activeCategory));
          break;
      }
    };
    fetch();
  }, [activeCategory, dispatch, isAdded]);

  function filterNotice(list) {
    if (search.length === 0) {
      return list;
    }
    const normalizeSearch = search.toLocaleLowerCase();
    const filterList = list.filter(({ title }) =>
      title.toLowerCase().includes(normalizeSearch),
    );
    return filterList;
  }

  return (
    <>
      <Grid>
        {filterNotice(noticesList).length > 0 &&
          filterNotice(noticesList).map(notice => (
            <NoticeCategoryItem key={notice._id} fetch={notice} />
          ))}
      </Grid>
    </>
  );
};
