import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import style from './NoticeCategoryItem.styled';
import Modal from 'components/Notice/ModalNotice';
import { addFavNotice, removeFavNotice } from 'redux/notices/noticesOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useAuth } from 'hooks/useAuth';

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
  HeartIconFav,
} = style;

export const NoticeCategoryItem = ({ fetch }) => {
  const { title, breed, location, birthday, avatarURL, _id, favorite } = fetch;
  const { user } = useAuth();
  const dispatch = useDispatch();
  const ref = useRef(user);

  const date = moment(birthday, 'DD.MM.YYYY').fromNow(true);

  const [showModal, setShowModal] = useState(false);
  const [addedToFav, setAddedToFav] = useState(() => {
    return favorite.includes(ref.current.user.id);
  });

  const handleFavoriteToggle = () => {
    if (!selectIsLoggedIn) {
      return;
    }
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
        {addedToFav ? <HeartIconFav /> : <HeartIcon />}
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
