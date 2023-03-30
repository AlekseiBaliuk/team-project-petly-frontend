/* eslint-disable jsx-a11y/no-distracting-elements */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import converter from 'number-to-words';
import LinesEllipsis from 'react-lines-ellipsis';
import { Notify } from 'notiflix';
import style from './NoticeCategoryItem.styled';
import Modal from 'components/Notice/ModalNotice';
import {
  fetchNotices,
  addFavNotice,
  removeFavNotice,
  deleteUserPet,
  getFavorites,
  getMyNotices,
} from 'redux/notices/noticesOperations';
import { useAuth } from 'hooks/useAuth';
import { categoriesHandler } from 'helpers/categoriesHandler';
import { useCategory } from 'hooks/useCategory';
import { ApproveRemovingModal } from 'components/SharedComponents/ApproveRemovingModal/ApproveRemovingModal';

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
  Del,
} = style;

export const NoticeCategoryItem = ({ fetch, page }) => {
  const {
    title,
    breed,
    location,
    birthday,
    avatarURL,
    _id,
    favorite,
    owner,
    category,
  } = fetch;

  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
  const { activeCategory } = useCategory();
  const urlPath = useLocation();

  const date = moment(birthday, 'DD.MM.YYYY').fromNow(true);
  const agePet = () => {
    const arr = date.split(' ');

    if (arr[0] === 'a') {
      arr.shift();
      arr.unshift('one');
    } else {
      const num = converter.toWords(Number(arr[0]));
      arr.shift();
      arr.unshift(num);
    }
    const age = arr.join(' ');
    return age;
  };

  const longText = title;

  const favoritePage = urlPath.pathname.includes('favorite');
  const myNotices = urlPath.pathname.includes('own');

  const [showModal, setShowModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [addedToFav, setAddedToFav] = useState(() => {
    return isLoggedIn ? favorite?.includes(user.id) : false;
  });

  const handleDelete = () => {
    const getNoticesAfterDelete = async () => {
      await dispatch(deleteUserPet(_id));
      if (favoritePage) {
        dispatch(getFavorites(page));
        return;
      }
      if (myNotices) {
        dispatch(getMyNotices(page));
        return;
      }
      dispatch(fetchNotices());
      await dispatch(fetchNotices({ activeCategory, page }));
    };

    getNoticesAfterDelete();
  };

  const handleFavoriteToggle = () => {
    if (!isLoggedIn) {
      Notify.failure('Please, log in to add favorites');
      return;
    }
    const removeFavorite = async () => {
      setAddedToFav(false);
      await dispatch(removeFavNotice(_id));
      if (favoritePage) {
        dispatch(getFavorites(page));
        return;
      }
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
      <Category>{categoriesHandler(category)}</Category>
      <Like type="button" onClick={handleFavoriteToggle}>
        {addedToFav ? <HeartIconFav /> : <HeartIcon />}
      </Like>
      <Image src={avatarURL} alt="dog" />
      <ItemTitle>
        <LinesEllipsis text={longText} maxLine={2} ellipsis="..." trimRight />
      </ItemTitle>
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
          <Span>
            {agePet().length > 24 ? (
              <marquee scrollamount="1" behavior="alternate">
                {agePet()}
              </marquee>
            ) : (
              agePet()
            )}
          </Span>
        </Item>
      </List>
      <ButtonWrap>
        <Loadmore onClick={toggleModal} type="button">
          Learn more
        </Loadmore>
        {owner?._id === user?.id && (
          <Delete onClick={() => setShowApproveModal(true)}>
            Delete
            <Del />
          </Delete>
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

      <ApproveRemovingModal
        modalOpen={showApproveModal}
        yesAction={handleDelete}
        noAction={() => setShowApproveModal(false)}
      />
    </Card>
  );
};
