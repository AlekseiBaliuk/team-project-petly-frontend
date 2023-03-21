import { LabelInput } from './Label';
import { createPortal } from 'react-dom';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import { useEffect } from 'react';
import {
  Wrapper,
  Form,
  Title,
  Subtitle,
  BtnListCategory,
  BtnCategory,
  LabelList,
  BtnStepList,
  BtnStep,
  BtnClose,
  // LockBodyScroll,
} from './FirstStep.styled';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const FirstStep = ({ adminModal }) => {
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
      adminModal('none');
    }
  }

  const handleModalClick = e => {
    if (e.currentTarget === e.target) {
      adminModal('none');
    }
  };

  return createPortal(
    <Wrapper onClick={handleModalClick}>
      <Form id="form">
        <BtnClose type="button" onClick={() => adminModal('none')}>
          <Close />
        </BtnClose>
        <Title>Add pet</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur
        </Subtitle>
        <BtnListCategory>
          <li>
            <BtnCategory type="button">lost/found</BtnCategory>
          </li>
          <li>
            <BtnCategory type="button">in good hands</BtnCategory>
          </li>
          <li>
            <BtnCategory type="button">sell</BtnCategory>
          </li>
        </BtnListCategory>
        <LabelList>
          <li>
            <LabelInput
              title={'Tittle of ad:'}
              name={'title'}
              type={'text'}
              placeholder={'Type name pet'}
            />
          </li>
          <li>
            <LabelInput
              title={'Name pet:'}
              name={'name'}
              type={'text'}
              placeholder={'Type name pet'}
            />
          </li>
          <li>
            <LabelInput
              title={'Date of birth:'}
              name={'dateOfBirth'}
              type={'text'}
              placeholder={'Type date of birth'}
            />
          </li>
          <li>
            <LabelInput
              title={'Breed:'}
              name={'breed'}
              type={'text'}
              placeholder={'Type breed'}
            />
          </li>
        </LabelList>
        <BtnStepList>
          <li>
            <BtnStep type="submit" onClick={() => adminModal('step2')}>
              Next
            </BtnStep>
          </li>
          <li>
            <BtnStep type="button" onClick={() => adminModal('none')}>
              Cancel
            </BtnStep>
          </li>
        </BtnStepList>
      </Form>
    </Wrapper>,
    modalRoot,
  );
};