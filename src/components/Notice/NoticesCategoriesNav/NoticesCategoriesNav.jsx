import {
  CategoriesList,
  Link,
  CategoryItem,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  return (
    <CategoriesList>
      <CategoryItem>
        <Link to="/notices/sell">sell</Link>
      </CategoryItem>
      <CategoryItem>
        <Link to="/notices/lost-found">lost/found</Link>
      </CategoryItem>
      <CategoryItem>
        <Link to="/notices/for-free">in good hands</Link>
      </CategoryItem>
      <CategoryItem>
        <Link to="/notices/favorite">favorite ads</Link>
      </CategoryItem>
      <CategoryItem>
        <Link to="/notices/own">my ads</Link>
      </CategoryItem>
    </CategoriesList>
  );
};
