import {
  CategoriesList,
  Button,
  CategoryItem,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  return (
    <CategoriesList>
      <CategoryItem>
        <Button type="button">sell</Button>
      </CategoryItem>
      <CategoryItem>
        <Button type="button">lost/found</Button>
      </CategoryItem>
      <CategoryItem>
        <Button type="button">in good hands</Button>
      </CategoryItem>
      <CategoryItem>
        <Button type="button">favorite ads</Button>
      </CategoryItem>
      <CategoryItem>
        <Button type="button">my ads</Button>
      </CategoryItem>
    </CategoriesList>
  );
};
