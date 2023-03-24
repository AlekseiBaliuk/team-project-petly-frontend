import { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import style from './NoticeCategoryItem.styled';
import Modal from 'components/Notice/ModalNotice';
import {
  fetchNotices,
  addFavNotice,
  removeFavNotice,
  deleteUserPet,
} from 'redux/notices/noticesOperations';
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
  ButtonWrap,
} = style;

export const NoticeCategoryItem = ({ fetch }) => {
  const { title, breed, location, birthday, avatarURL, _id, favorite, owner } =
    fetch;

  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const date = moment(birthday, 'DD.MM.YYYY').fromNow(true);

  const [showModal, setShowModal] = useState(false);
  const [addedToFav, setAddedToFav] = useState(() => {
    return isLoggedIn ? favorite.includes(user.id) : false;
  });

  const handleDelete = () => {
    const getNoticesAfterDelete = async () => {
      await dispatch(deleteUserPet(_id));
      await dispatch(fetchNotices());
    };

    getNoticesAfterDelete();
  };

  const handleFavoriteToggle = () => {
    if (!isLoggedIn) {
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
      <ButtonWrap>
        <Loadmore onClick={toggleModal} type="button">
          Learn more
        </Loadmore>
        {owner._id === user?.id && (
          <Delete onClick={handleDelete}>Delete</Delete>
        )}
      </ButtonWrap>

      {showModal && (
        <Modal
          toggleFav={() => handleFavoriteToggle()}
          toggle={toggleModal}
          noticeById={fetch}
          fav={addedToFav}
        />
      )}
    </Card>
  );
};
