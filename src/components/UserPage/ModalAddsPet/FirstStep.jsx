import { createPortal } from 'react-dom';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import { useEffect } from 'react';
import {
  Wrapper,
  Form,
  Title,
  BtnStepList,
  BtnStep,
  BtnClose,
} from '../../ModalAddNotice/ModalAddNotice.styled';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { LabelInputList } from './LabelInputList';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const FirstStep = ({
  adminModal,
  setModalData,
  modalData,
  initialValuesModalData,
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
    name: yup
      .string()
      .required('Required')
      .matches(nameRegExp, 'Only letters!')
      .min(2, 'Too Short!')
      .max(16, 'Too Long!'),
    birthday: yup
      .date()
      .required('Required')
      .typeError('DD.MM.YYYY')
      .min(
        new Date(1900, 0, 1),
        'Date earlier than 1st of January 1900 is not allowed!')
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
      });
      adminModal('step2');
    },
  });

  useEffect(() => {
    if (adminModal === 'none') {
      setModalData(initialValuesModalData);
    }
  }, [adminModal, initialValuesModalData, setModalData]);

  return createPortal(
    <Wrapper onClick={handleModalClick}>
      <Form onSubmit={formik.handleSubmit}>
        <BtnClose type="button" onClick={clearData}>
          <Close />
        </BtnClose>
        <Title>Add pet</Title>
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
