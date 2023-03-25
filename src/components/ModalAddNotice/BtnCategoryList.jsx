import { BtnListCategory } from './ModalAddNotice.styled';
import { BtnCategoryItem } from './BtnCategoryItem';

export const BtnCategoryList = ({ findCategoryNotice, isBtnCategory }) => {
  const categoryBtns = [
    { name: 'lost/found', data: 'lost-found' },
    { name: 'in good hands', data: 'in-good-hands' },
    { name: 'sell', data: 'sell' },
  ];

  return (
    <BtnListCategory>
      {categoryBtns.map(({ name, data }) => (
        <BtnCategoryItem
          key={data}
          name={name}
          data={data}
          findCategoryNotice={findCategoryNotice}
          isBtnCategory={isBtnCategory}
        />
      ))}
    </BtnListCategory>
  );
};
