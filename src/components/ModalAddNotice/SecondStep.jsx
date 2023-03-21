import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Wrapper,
  Form,
  Title,
  Subtitle,
  LabelList,
  BtnStepList,
  BtnStep,
  BtnClose,
  Label,
  TitlePoint,
  AddDiv,
  Textarea,
  ItemWrapper,
  AddInput,
} from './ModalAddNotice.styled';
import { LabelInput } from './Label';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import { ReactComponent as Plus } from 'staticImages/icon-plus.svg';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { SexLists } from './SexList';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const SecondStep = ({ adminModal, isBtnCategory }) => {
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
        <TitlePoint>The sex:</TitlePoint>
        <SexLists />
        <LabelList>
          <li>
            <LabelInput
              title={'Location:'}
              name={'location'}
              type={'text'}
              placeholder={'Type location'}
            />
          </li>
          {isBtnCategory === 'sell' && (
            <li>
              <LabelInput
                title={'Price:'}
                name={'price'}
                type={'text'}
                placeholder={'Type price'}
              />
            </li>
          )}
          <li>
            <ItemWrapper>
              <Label>
                Load the pet’s image:
                <AddDiv>
                  <Plus />
                  <AddInput type="file"></AddInput>
                </AddDiv>
              </Label>
            </ItemWrapper>
          </li>
          <li>
            <ItemWrapper>
              <Label>Comments</Label>
              <Textarea placeholder="Type comments" />
            </ItemWrapper>
          </li>
        </LabelList>
        <BtnStepList>
          <li>
            <BtnStep type="submit" onClick={() => adminModal('none')}>
              Done
            </BtnStep>
          </li>
          <li>
            <BtnStep type="button" onClick={() => adminModal('step1')}>
              Back
            </BtnStep>
          </li>
        </BtnStepList>
      </Form>
    </Wrapper>,
    modalRoot,
  );
};
