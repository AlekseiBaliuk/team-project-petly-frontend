import React, { useState } from 'react';
import { Container } from 'components/Container/Container.styled';
import NoticesCategoriesNav from 'components/Notice/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notice/AddNoticeButton';
import { FirstStep } from 'components/AddPetForm/FirstStep';
import { SecondStep } from 'components/AddPetForm/SecondStep';
import NoticeCategoryList from 'components/Notice/NoticeCategoryList';
import { Title, PetSearchNav, Main } from './NoticesPage.styled';

const NoticesPage = () => {
  const [isModalShow, setIsModalShow] = useState('none');

  const adminModal = type => setIsModalShow(type);

  return (
    <Main>
      <section>
        <Container>
          <Title>Find your favorite pet</Title>
          <PetSearchNav>
            <AddNoticeButton openModal={() => adminModal('step1')} />
            {isModalShow === 'step1' && <FirstStep adminModal={adminModal} />}
            {isModalShow === 'step2' && <SecondStep adminModal={adminModal} />}
            <NoticesCategoriesNav />
          </PetSearchNav>
          <NoticeCategoryList />
        </Container>
      </section>
    </Main>
  );
};

export default NoticesPage;
