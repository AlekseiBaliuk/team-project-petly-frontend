import {
  CategoriesList,
  Link,
  CategoryItem,
} from './NoticesCategoriesNav.styled';
import { deviceWindows } from '../../../devices';

export const NoticesCategoriesNav = () => {
  return (
    <CategoriesList>
      {!deviceWindows.beforeTablet && ( // sell category rendered first in desktop version
        <CategoryItem>
          <Link to="/notices/sell">sell</Link>
        </CategoryItem>
      )}
      <CategoryItem>
        <Link to="/notices/lost-found">lost/found</Link>
      </CategoryItem>
      <CategoryItem>
        <Link to="/notices/for-free">in good hands</Link>
      </CategoryItem>
      {deviceWindows.beforeTablet && ( // sell category rendered third in "under-tablet" version
        <CategoryItem>
          <Link to="/notices/sell">sell</Link>
        </CategoryItem>
      )}
      <CategoryItem>
        <Link to="/notices/favorite">favorite ads</Link>
      </CategoryItem>
      <CategoryItem>
        <Link to="/notices/own">my ads</Link>
      </CategoryItem>
    </CategoriesList>
  );
};
