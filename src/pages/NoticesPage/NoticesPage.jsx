import React, { useState } from 'react';
import { Container } from 'components/Container/Container.styled';
import NoticesCategoriesNav from 'components/Notice/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notice/AddNoticeButton';
import { FirstStep } from 'components/ModalAddNotice/FirstStep';
import { SecondStep } from 'components/ModalAddNotice/SecondStep';
import NoticeCategoryList from 'components/Notice/NoticeCategoryList';
import { PageTitle } from 'components/PageTitle/PageTitle';

import { Search } from 'components/Search/Search';

import { PetSearchNav, Section } from './NoticesPage.styled';

const NoticesPage = () => {
  const [isModalShow, setIsModalShow] = useState('none');
  const [isBtnCategory, setBtnCategory] = useState('none');
  const [isShown, setIsShown] = useState(false);
  const [filter, setFilter] = useState('');
  const initialValuesModalData = {
    category: '',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: 'none',
    location: '',
    price: '',
    image: '',
    comments: '',
  };
  const [modalData, setModalData] = useState(initialValuesModalData);

  const adminModal = (type, value) => {
    setIsShown(!value);
    setIsModalShow(type);
  };

  const findCategoryNotice = category => {
    setBtnCategory(category);
  };
  return (
    <Section>
      <Container>
        <PageTitle>Find your favorite pet</PageTitle>
        <Search sendSearch={setFilter} />
        <PetSearchNav>
          {!isShown && (
            <AddNoticeButton openModal={() => adminModal('step1', false)} />
          )}
          {isModalShow === 'step1' && (
            <FirstStep
              adminModal={adminModal}
              findCategoryNotice={findCategoryNotice}
              isBtnCategory={isBtnCategory}
              setModalData={setModalData}
              modalData={modalData}
              initialValuesModalDat={initialValuesModalData}
              setBtnCategory={setBtnCategory}
            />
          )}
          {isModalShow === 'step2' && (
            <SecondStep
              adminModal={adminModal}
              isBtnCategory={isBtnCategory}
              setModalData={setModalData}
              modalData={modalData}
              initialValuesModalData={initialValuesModalData}
            />
          )}
          <NoticesCategoriesNav />
        </PetSearchNav>
        <NoticeCategoryList search={filter} />
      </Container>
    </Section>
  );
};

export default NoticesPage;
