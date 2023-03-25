import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCategory } from 'hooks/useCategory';
import selectors from 'redux/notices/noticesSelectors';
import { fetchNotices, getFavorites } from 'redux/notices/noticesOperations';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { Grid } from './NoticeCategoryList.styled';
import { getUserPets } from 'redux/user/userOperations';
import { selectUserPets } from 'redux/user/userSelectors';
// import { Loader } from 'components/Loader/Loader';

const {
  selectNotices,
  // selectLoadingStatus,
  // selectErrorMessage,
  selectUserFavorites,
} = selectors;

export const NoticeCategoryList = ({ search }) => {
  const noticesList = useSelector(selectNotices);
  const favoritesList = useSelector(selectUserFavorites);
  const userPetsList = useSelector(selectUserPets);

  const { activeCategory } = useCategory();
  // const isLoading = useSelector(selectLoadingStatus);
  // const error = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      switch (activeCategory) {
        case 'favorite':
          await dispatch(getFavorites());
          break;
        case 'my-ads':
          await dispatch(getUserPets());
          break;

        default:
          await dispatch(fetchNotices(activeCategory));
          break;
      }
    };
    fetch();
  }, [activeCategory, dispatch]);

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

  const getList = () => {
    switch (activeCategory) {
      case 'favorite':
        return filterNotice(favoritesList);
      case 'my-ads':
        return filterNotice(userPetsList);

      default:
        return filterNotice(noticesList);
    }
  };

  // const filterNoticeList = filterNotice(noticesList);

  return (
    <>
      {/* {error && <p>Not found</p>} */}
      {/* {isLoading && <Loader />} */}
      <Grid>
        {getList().length > 0 &&
          getList().map(notice => {
            return <NoticeCategoryItem key={notice._id} fetch={notice} />;
          })}
      </Grid>
    </>
  );
};
