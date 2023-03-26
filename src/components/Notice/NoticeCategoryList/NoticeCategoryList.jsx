import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCategory } from 'hooks/useCategory';
import selectors from 'redux/notices/noticesSelectors';
import {
  fetchNotices,
  getFavorites,
  getMyNotices,
} from 'redux/notices/noticesOperations';
import NoticeCategoryItem from '../NoticeCategoryItem';
import style from './NoticeCategoryList.styled';

const {
  selectNotices,
  selectIsAdded,
  // selectTotal
} = selectors;

export const NoticeCategoryList = ({ search }) => {
  const noticesList = useSelector(selectNotices);
  const isAdded = useSelector(selectIsAdded);
  // const total = useSelector(selectTotal);

  const [page, setPage] = useState(1);
  // const [pets, setPets] = useState(noticesList);
  const { Grid, Scroll } = style;

  const { activeCategory } = useCategory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      switch (activeCategory) {
        case 'favorite':
          await dispatch(getFavorites(page));
          break;
        case 'my-ads':
          await dispatch(getMyNotices(page));
          break;

        default:
          await dispatch(fetchNotices({ activeCategory, page }));
          break;
      }
    };
    fetch();
  }, [activeCategory, dispatch, isAdded, page]);

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

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setPage(prev => prev + 1);
  //   }
  // };

  // useEffect(() => window.addEventListener('scroll', handleScroll));

  const scrollTo = () => {
    setPage(1);
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Grid>
        {filterNotice(noticesList).length > 0 &&
          // filterNotice(pets).length <= total &&
          filterNotice(noticesList).map(notice => (
            <NoticeCategoryItem key={notice._id} fetch={notice} />
          ))}
      </Grid>
      {<Scroll onClick={scrollTo} />}
    </>
  );
};
