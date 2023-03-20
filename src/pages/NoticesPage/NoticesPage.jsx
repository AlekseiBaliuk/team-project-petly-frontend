import React, { useState } from 'react';
import { Container } from 'components/Container/Container.styled';
import NoticeCategoryList from 'components/Notice/NoticeCategoryList';
import AddNoticeButton from 'components/Notice/AddNoticeButton';
import { FirstStep } from 'components/AddPetForm/FirstStep';
import { Title } from './NoticesPage.styled';
import { SecondStep } from 'components/AddPetForm/SecondStep';

const NoticesPage = () => {
  const [isModalShow, setIsModalShow] = useState('none');

  const adminModal = type => {
    setIsModalShow(type);
    return;
  };

  return (
    <main>
      <section>
        <Container>
          <Title>Find your favorite pet</Title>
          <AddNoticeButton openModal={() => adminModal('step1')} />
          {isModalShow === 'step1' && <FirstStep adminModal={adminModal} />}
          {isModalShow === 'step2' && <SecondStep adminModal={adminModal} />}
          <NoticeCategoryList />
        </Container>
      </section>
    </main>
  );
};

export default NoticesPage;
