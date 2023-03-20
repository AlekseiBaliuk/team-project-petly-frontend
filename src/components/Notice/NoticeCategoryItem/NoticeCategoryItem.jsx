import { useState } from 'react';
import moment from 'moment';
import style from './NoticeCategoryItem.styled';
import Modal from 'components/Notice/ModalNotice';

const {
  Image,
  Card,
  Category,
  Like,
  ItemTitle,
  List,
  Item,
  Span,
  Loadmore,
  Delete,
  HeartIcon,
} = style;

export const NoticeCategoryItem = ({ fetch }) => {
  const { title, breed, location, birthday, avatarURL } = fetch;

  const date = moment(birthday).fromNow(true);

  const [showModal, setShowModal] = useState(false);

  if (showModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <Card>
      <Category>Sell</Category>
      <Like type="button">
        <HeartIcon />
      </Like>
      <Image src={avatarURL} alt="dog" />
      <ItemTitle>{title}</ItemTitle>
      <List>
        <Item>
          <Span>Breed:</Span>
          <Span>{breed}</Span>
        </Item>
        <Item>
          <Span>Place:</Span>
          <Span>{location}</Span>
        </Item>
        <Item>
          <Span>Age:</Span>
          <Span>{date}</Span>
        </Item>
      </List>
      <Loadmore onClick={toggleModal} type="button">
        Learn more
      </Loadmore>
      <Delete>Delete</Delete>
      {showModal && <Modal toggle={toggleModal} noticeById={fetch} />}
    </Card>
  );
};
