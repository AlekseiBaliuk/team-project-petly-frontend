import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Hearts } from 'react-loader-spinner';
import { useCategory } from 'hooks/useCategory';
import selectors from 'redux/notices/noticesSelectors';
import {
  fetchNotices,
  getFavorites,
  getMyNotices,
  searchNotice,
  searchFavorite,
  searchMyPets,
} from 'redux/notices/noticesOperations';
import NoticeCategoryItem from '../NoticeCategoryItem';
import style from './NoticeCategoryList.styled';

const { selectNotices, selectIsAdded, selectTotal, selectLoadingStatus } =
  selectors;

export const NoticeCategoryList = ({ page, setPage, search }) => {
  const [showTopButton, setShowTopButton] = useState(false);
  const noticesList = useSelector(selectNotices);
  const isAdded = useSelector(selectIsAdded);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectLoadingStatus);
  const { activeCategory } = useCategory();

  const { Grid, Scroll, Noads } = style;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      if (search) {
        const searchPet = async () => {
          switch (activeCategory) {
            case 'favorite':
              await dispatch(searchFavorite({ page, search }));
              break;
            case 'my-ads':
              await dispatch(searchMyPets({ page, search }));
              break;
            default:
              await dispatch(searchNotice({ activeCategory, page, search }));
              break;
          }
        };
        searchPet();
      }

      if (!search) {
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
      }
    };

    fetch();
  }, [activeCategory, dispatch, isAdded, page, search]);

  const handleScroll = () => {
    setShowTopButton(window.scrollY > 100);
    if (noticesList.length === 0) return;
    return (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      noticesList.length < total &&
      setPage(page + 1)
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollTo = () => {
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {noticesList.length > 0 && (
        <Grid>
          {noticesList.map(notice => (
            <NoticeCategoryItem key={notice._id} fetch={notice} page={page} />
          ))}
        </Grid>
      )}
      {noticesList.length === 0 && !isLoading && (
        <Noads>There are no ads</Noads>
      )}
      {isLoading && (
        <Hearts
          height="80"
          width="80"
          color="#cb9622"
          ariaLabel="hearts-loading"
          wrapperStyle={{ textAlign: 'center', display: 'block' }}
          visible={true}
        />
      )}
      {showTopButton && <Scroll onClick={scrollTo} />}
    </>
  );
};
