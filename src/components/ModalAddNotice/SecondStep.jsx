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
import { useFormik } from 'formik';
// import * as yup from 'yup';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const SecondStep = ({
  adminModal,
  isBtnCategory,
  setModalData,
  modalData,
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

  // const validationSchema = yup.object().shape({
  //   sex: yup.string().required('Required'),
  //   location: yup
  //     .string()
  //     .min(2, 'Too Short!')
  //     .max(28, 'Too Long!')
  //     .required('Required'),
  //   ptice: yup
  //     .string()
  //     .min(2, 'Too Short!')
  //     .max(16, 'Too Long!')
  //     .required('Required'),
  //   urlImg: yup.string().url().nullable().required('Required'),
  //   comments: yup
  //     .string()
  //     .min(2, 'Too Short!')
  //     .max(24, 'Too Long!')
  //     .required('Required'),
  // });

  const formik = useFormik({
    initialValues: modalData,
    // validationSchema,
    onSubmit: values => {
      setModalData({
        ...modalData,
        ...values,
      });
      adminModal('none', true);
    },
  });

  return createPortal(
    <Wrapper onClick={handleModalClick}>
      <Form onSubmit={formik.handleSubmit}>
        <BtnClose type="button" onClick={() => adminModal('none', true)}>
          <Close />
        </BtnClose>
        <Title>Add pet</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur
        </Subtitle>
        <TitlePoint>The sex:</TitlePoint>
        <SexLists formik={formik} />
        <LabelList>
          <li>
            <LabelInput
              title={'Location:'}
              name={'location'}
              type={'text'}
              placeholder={'Type location'}
              formik={formik}
            />
          </li>
          {isBtnCategory === 'sell' && (
            <li>
              <LabelInput
                title={'Price:'}
                name={'price'}
                type={'text'}
                placeholder={'Type price'}
                formik={formik}
              />
            </li>
          )}
          <li>
            <ItemWrapper>
              <Label>
                Load the pet’s image:
                <AddDiv>
                  <Plus />
                  <AddInput
                    type="file"
                    name="urlImg"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  ></AddInput>
                </AddDiv>
              </Label>
            </ItemWrapper>
          </li>
          <li>
            <ItemWrapper>
              <Label>Comments</Label>
              <Textarea
                placeholder="Type comments"
                name="comments"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </ItemWrapper>
          </li>
        </LabelList>
        <BtnStepList>
          <li>
            <BtnStep type="submit">Done</BtnStep>
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
