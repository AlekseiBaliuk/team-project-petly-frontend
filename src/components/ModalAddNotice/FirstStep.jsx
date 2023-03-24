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
import { useFormik } from 'formik';
// import * as yup from 'yup';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const FirstStep = ({
  adminModal,
  findCategoryNotice,
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
  //   // category: yup.string().required(),
  //   title: yup
  //     .string()
  //     .required('Required')
  //     .min(2, 'Too Short!')
  //     .max(28, 'Too Long!'),
  //   name: yup
  //     .string()
  //     .required('Required')
  //     .min(2, 'Too Short!')
  //     .max(16, 'Too Long!'),
  //   dateOfBirth: yup
  //     .date()
  //     .default(() => new Date())
  //     .required('Required'),
  //   breed: yup
  //     .string()
  //     .required('Required')
  //     .min(2, 'Too Short!')
  //     .max(24, 'Too Long!'),
  // });

  const formik = useFormik({
    initialValues: modalData,
    // validationSchema,
    onSubmit: values => {
      setModalData({ ...values, category: isBtnCategory });
      adminModal('step2');
    },
  });

  return createPortal(
    <Wrapper onClick={handleModalClick}>
      <Form onSubmit={formik.handleSubmit}>
        <BtnClose type="button" onClick={() => adminModal('none')}>
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
        <LabelInputList formik={formik} />
        <BtnStepList>
          <li>
            <BtnStep type="submit">Next</BtnStep>
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
