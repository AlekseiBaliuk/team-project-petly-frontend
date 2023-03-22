import {
  CategoriesList,
  Link,
  CategoryItem,
} from './NoticesCategoriesNav.styled';
import { useAuth } from 'hooks/useAuth';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <CategoriesList>
      <CategoryItem>
        <Link to="/notices/lost-found">lost/found</Link>
      </CategoryItem>

      <CategoryItem>
        <Link to="/notices/for-free">in good hands</Link>
      </CategoryItem>

      <CategoryItem>
        <Link to="/notices/sell">sell</Link>
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
