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
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const FirstStep = ({
  adminModal,
  findCategoryNotice,
  isBtnCategory,
  setModalData,
  modalData,
  initialValuesModalData,
  setBtnCategory,
  clearData,
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
      clearData();
    }
  }

  const handleModalClick = e => {
    if (e.currentTarget === e.target) {
      clearData();
    }
  };

  const nameRegExp = /^[A-Za-z\s]+$/;

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required('Required')
      .matches(nameRegExp, 'Only letters!')
      .min(2, 'Too Short!')
      .max(48, 'Too Long!'),
    name: yup
      .string()
      .required('Required')
      .matches(nameRegExp, 'Only letters!')
      .min(2, 'Too Short!')
      .max(16, 'Too Long!'),
    birthday: yup
      .date()
      .min(
        new Date(1900, 0, 1),
        'Date earlier than 1st of January 1900 is not allowed!',
      )
      .required('Required')
      .typeError('DD.MM.YYYY')
      .max(new Date(), 'Future date not allowed'),
    breed: yup
      .string()
      .required('Required')
      .matches(nameRegExp, 'Only letters!')
      .min(2, 'Too Short!')
      .max(24, 'Too Long!'),
  });

  const formik = useFormik({
    initialValues: modalData,
    validationSchema,
    onSubmit: values => {
      setModalData({
        ...modalData,
        ...values,
        category: isBtnCategory,
      });
      if (isBtnCategory === 'none') {
        Notify.warning('Please select an ad category!');
        return;
      }
      adminModal('step2');
    },
  });

  useEffect(() => {
    if (adminModal === 'none') {
      setModalData(initialValuesModalData);
    }
  }, [adminModal, initialValuesModalData, setModalData, setBtnCategory]);

  return createPortal(
    <Wrapper onClick={handleModalClick}>
      <Form onSubmit={formik.handleSubmit}>
        <BtnClose type="button" onClick={clearData}>
          <Close />
        </BtnClose>
        <Title>Add pet</Title>
        <Subtitle>Please, fill the data about the pet</Subtitle>
        <BtnCategoryList
          findCategoryNotice={findCategoryNotice}
          isBtnCategory={isBtnCategory}
        />
        <LabelInputList formik={formik} />
        <BtnStepList>
          <li>
            <BtnStep type="submit" accent>
              Next
            </BtnStep>
          </li>
          <li>
            <BtnStep type="button" onClick={clearData}>
              Cancel
            </BtnStep>
          </li>
        </BtnStepList>
      </Form>
    </Wrapper>,
    modalRoot,
  );
};
