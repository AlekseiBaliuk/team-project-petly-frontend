import { LabelInput } from './Label';
import { ReactComponent as Close } from 'staticImages/Close.svg';
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
} from './FirstStep.styled';

export const FirstStep = () => {
  return (
    <Wrapper>
      <Form>
        <BtnClose type="button">
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
            <BtnStep type="submit">Next</BtnStep>
          </li>
          <li>
            <BtnStep type="button">Cancel</BtnStep>
          </li>
        </BtnStepList>
      </Form>
    </Wrapper>
  );
};
