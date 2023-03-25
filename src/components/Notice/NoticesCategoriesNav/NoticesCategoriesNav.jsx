import {
  CategoriesList,
  Link,
  CategoryItem,
} from './NoticesCategoriesNav.styled';
import { useAuth } from 'hooks/useAuth';

export const NoticesCategoriesNav = ({ categoryChange }) => {
  const { isLoggedIn } = useAuth();

  return (
    <CategoriesList>
      <CategoryItem>
        <Link
          to="/notices/lost-found"
          onClick={() => categoryChange('lost-found')}
        >
          lost/found
        </Link>
      </CategoryItem>

      <CategoryItem>
        <Link
          to="/notices/for-free"
          onClick={() => categoryChange('in-good-hands')}
        >
          in good hands
        </Link>
      </CategoryItem>

      <CategoryItem>
        <Link to="/notices/sell" onClick={() => categoryChange('sell')}>
          sell
        </Link>
      </CategoryItem>

      {isLoggedIn && (
        <CategoryItem>
          <Link to="/notices/favorite">favorite ads</Link>
        </CategoryItem>
      )}

      {isLoggedIn && (
        <CategoryItem>
          <Link to="/notices/own">my ads</Link>
        </CategoryItem>
      )}
    </CategoriesList>
  );
};
