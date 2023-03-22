import { BtnCategory } from './ModalAddNotice.styled';

export const BtnCategoryItem = ({
  data,
  isBtnCategory,
  name,
  findCategoryNotice,
}) => {
  const onButtonClickCategory = e => {
    const category = e.target.dataset.category;
    findCategoryNotice(category);
  };

  return (
    <li key={data}>
      <BtnCategory
        type="button"
        data-category={data}
        onClick={onButtonClickCategory}
        style={{
          backgroundColor: data === isBtnCategory ? '#F59256' : '#fff',
          color: data === isBtnCategory ? '#fff' : '#000',
        }}
      >
        {name}
      </BtnCategory>
    </li>
  );
};
