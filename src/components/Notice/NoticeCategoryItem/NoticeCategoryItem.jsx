import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import style from './NoticeCategoryItem.styled';
import Modal from 'components/Notice/ModalNotice';
import { addFavNotice, removeFavNotice } from 'redux/notices/noticesOperations';
import selectors from 'redux/notices/noticesSelectors';

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
  const { title, breed, location, birthday, avatarURL, _id } = fetch;

  const { selectUserFavorites } = selectors;
  const dispatch = useDispatch();

  const favoriteNotices = useSelector(selectUserFavorites);
  const date = moment(birthday, 'DD.MM.YYYY').fromNow(true);

  const [showModal, setShowModal] = useState(false);
  const [addedToFav, setAddedToFav] = useState(() => {
    return favoriteNotices.includes(_id) ? true : false;
  });

  const handleFavoriteToggle = () => {
    // if (!isLoggedIn) {
    //   return;
    // }
    const removeFavorite = async () => {
      setAddedToFav(false);
      await dispatch(removeFavNotice(_id));
    };
    if (addedToFav) {
      removeFavorite();
      return;
    }
    dispatch(addFavNotice(_id));
    setAddedToFav(true);
  };

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
      <Like type="button" onClick={handleFavoriteToggle}>
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
