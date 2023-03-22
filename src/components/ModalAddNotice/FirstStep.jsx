import { createPortal } from 'react-dom';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import { useEffect } from 'react';
import {
  Wrapper,
  Form,
  Title,
  Subtitle,
  BtnStepList,
  BtnStep,
  BtnClose,
} from './ModalAddNotice.styled';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { BtnCategoryList } from './BtnCategoryList';
import { LabelInputList } from './LabelInputList';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const FirstStep = ({
  adminModal,
  findCategoryNotice,
  isBtnCategory,
  setNoticesDate,
}) => {
  useEffect(() => {
    disableBodyScroll(body);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      enableBodyScroll(body);
    };
  });

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      adminModal('none', true);
    }
  }

  const handleModalClick = e => {
    if (e.currentTarget === e.target) {
      adminModal('none', true);
    }
  };

  const onSubmitForm = e => {
    console.log(e);
  };

  return createPortal(
    <Wrapper onClick={handleModalClick}>
      <Form id="form" onSubmit={onSubmitForm}>
        <BtnClose type="button" onClick={() => adminModal('none', true)}>
          <Close />
        </BtnClose>
        <Title>Add pet</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur
        </Subtitle>
        <BtnCategoryList
          findCategoryNotice={findCategoryNotice}
          isBtnCategory={isBtnCategory}
        />
        <LabelInputList />
        <BtnStepList>
          <li>
            <BtnStep type="submit" onClick={() => adminModal('step2', false)}>
              Next
            </BtnStep>
          </li>
          <li>
            <BtnStep type="button" onClick={() => adminModal('none', true)}>
              Cancel
            </BtnStep>
          </li>
        </BtnStepList>
      </Form>
    </Wrapper>,
    modalRoot,
  );
};
