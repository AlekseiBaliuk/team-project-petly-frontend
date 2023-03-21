import { BtnListCategory } from './ModalAddNotice.styled';
import { BtnCategoryItem } from './BtnCategoryItem';

export const BtnCategoryList = ({ findCategoryNotice, isBtnCategory }) => {
  const categoryBtns = [
    { name: 'lost/found', data: 'lostFound' },
    { name: 'in good hands', data: 'inGoodHands' },
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
