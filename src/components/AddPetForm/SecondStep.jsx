import { useEffect } from 'react';
import {
  Wrapper,
  Form,
  Title,
  Subtitle,
  LabelList,
  BtnStepList,
  BtnStep,
  BtnClose,
  LockBodyScroll,
  Label,
} from './FirstStep.styled';
import { LabelInput } from './Label';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import { ReactComponent as Men } from 'staticImages/icon-men.svg';
import { ReactComponent as Women } from 'staticImages/icon-women.svg';
import { ReactComponent as Plus } from 'staticImages/icon-plus.svg';
import {
  SexList,
  SexItem,
  TitlePoint,
  AddBtn,
  Textarea,
  ItemWrapper,
} from './SecondStep.styled';

export const SecondStep = ({ adminModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

  return (
    <Wrapper onClick={handleModalClick}>
      <LockBodyScroll />
      <Form>
        <BtnClose type="button" onClick={() => adminModal('none')}>
          <Close />
        </BtnClose>
        <Title>Add pet</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur
        </Subtitle>
        <TitlePoint>The sex:</TitlePoint>
        <SexList>
          <SexItem>
            <Men />
            Male
          </SexItem>
          <SexItem>
            <Women />
            Female
          </SexItem>
        </SexList>
        <LabelList>
          <li>
            <LabelInput
              title={'Location:'}
              name={'location'}
              type={'text'}
              placeholder={'Type location'}
            />
          </li>
          <li>
            <LabelInput
              title={'Price:'}
              name={'price'}
              type={'text'}
              placeholder={'Type price'}
            />
          </li>
          <li>
            <ItemWrapper>
              <Label>Load the pet’s image:</Label>{' '}
              <AddBtn type="button">
                <Plus />
              </AddBtn>
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
    </Wrapper>
  );
};
