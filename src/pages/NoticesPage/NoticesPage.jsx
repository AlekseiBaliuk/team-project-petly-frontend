import React, { useState } from 'react';
import { Container } from 'components/Container/Container.styled';
import NoticeCategoryList from 'components/Notice/NoticeCategoryList';
import AddNoticeButton from 'components/Notice/AddNoticeButton';
import { FirstStep } from 'components/AddPetForm/FirstStep';
import { Title } from './NoticesPage.styled';

const NoticesPage = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  const openModal = () => {
    setIsModalShow(true);

    return;
  };

  return (
    <main>
      <section>
        <Container>
          <Title>Find your favorite pet</Title>
          <AddNoticeButton openModal={openModal} />
          {isModalShow && <FirstStep />}
          <NoticeCategoryList />
        </Container>
      </section>
    </main>
  );
};

export default NoticesPage;
