import {
  CategoriesList,
  Link,
  CategoryItem,
} from './NoticesCategoriesNav.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { updateCategory } from 'redux/pets/petsSlice';

export const NoticesCategoriesNav = ({ page, setPage }) => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <CategoriesList>
      <CategoryItem>
        <Link
          to="/notices/lost-found"
          onClick={() => {
            setPage(1);
            dispatch(updateCategory('lost-found'));
          }}
        >
          lost/found
        </Link>
      </CategoryItem>

      <CategoryItem>
        <Link
          to="/notices/for-free"
          onClick={() => {
            setPage(1);
            dispatch(updateCategory('in-good-hands'));
          }}
        >
          in good hands
        </Link>
      </CategoryItem>

      <CategoryItem>
        <Link
          to="/notices/sell"
          onClick={() => {
            setPage(1);
            dispatch(updateCategory('sell'));
          }}
        >
          sell
        </Link>
      </CategoryItem>

      {isLoggedIn && (
        <CategoryItem>
          <Link
            to="/notices/favorite"
            onClick={() => {
              setPage(1);
              dispatch(updateCategory('favorite'));
            }}
          >
            favorite ads
          </Link>
        </CategoryItem>
      )}

      {isLoggedIn && (
        <CategoryItem>
          <Link
            to="/notices/own"
            onClick={() => {
              setPage(1);
              dispatch(updateCategory('my-ads'));
            }}
          >
            my ads
          </Link>
        </CategoryItem>
      )}
    </CategoriesList>
  );
};
