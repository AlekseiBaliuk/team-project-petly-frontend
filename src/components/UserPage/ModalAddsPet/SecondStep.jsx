import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Wrapper,
  Form,
  Title,
  LabelList,
  BtnStepList,
  BtnStep,
  BtnClose,
  Label,
  AddDiv2,
  Textarea,
  ItemWrapper,
  AddInput,
  Subtitle,
  UploadDiv,
  AddImg2,
} from '../../ModalAddNotice/ModalAddNotice.styled';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import { ReactComponent as Plus } from 'staticImages/icon-plus.svg';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ValidationMessage } from '../../ModalAddNotice/ModalAddNotice.styled';
import { useDispatch } from 'react-redux';
import { addUserPet } from 'redux/user/userOperations';
import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const SecondStep = ({
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

  const validationSchema = yup.object().shape({
    comments: yup
      .string()
      .required('Required')
      .min(8, 'Too Short!')
      .max(120, 'Too Long!'),
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: modalData,
    validationSchema,
    onSubmit: values => {
      const birthday = format(parseISO(modalData.birthday), 'dd.MM.yyy');
      const requestData = {
        ...modalData,
        ...values,
        birthday,
      };

      if (!fieldValue.size) {
        Notify.warning('Please select a photo!');
        return;
      }

      if (requestData.image === '') delete requestData.image;

      const formData = new FormData();

      for (const key in requestData) {
        formData.append(`${key}`, requestData[key]);
      }

      formData.append('image', fieldValue);

      setModalData(requestData);
      dispatch(addUserPet(formData));
      adminModal('none', true);
      setModalData(initialValuesModalData);
    },
  });

  const [fieldValue, setFieldValue] = useState({});
  const [imgSrc, setImageSrc] = useState('');

  const handleUpload = e => {
    setFieldValue(e.target.files[0]);
    const imgFile = e.target.files[0];

    if (imgFile.type && !imgFile.type.startsWith('image/')) {
      console.log('File is not an image.');
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', event => {
      setImageSrc(event.target.result);
    });
    reader.readAsDataURL(imgFile);
  };

  return createPortal(
    <Wrapper onClick={handleModalClick}>
      <Form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
        <BtnClose type="button" onClick={clearData}>
          <Close />
        </BtnClose>
        <Title>Add pet</Title>
        <Subtitle>Add photo and some comments</Subtitle>
        <LabelList>
          <li>
            <ItemWrapper>
              <Label></Label>
              <UploadDiv>
                <AddDiv2>
                  <Plus />
                  <AddInput
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleUpload}
                    value={formik.values.image}
                  ></AddInput>
                  {imgSrc.length > 0 ? (
                    <AddImg2 src={imgSrc} alt="images" />
                  ) : null}
                </AddDiv2>
              </UploadDiv>
            </ItemWrapper>
          </li>
          <li>
            <ItemWrapper>
              <Label>Comments</Label>
              <Textarea
                placeholder="Type comments"
                name="comments"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comments}
              />
              {formik.touched.comments && formik.errors.comments ? (
                <ValidationMessage>{formik.errors.comments}</ValidationMessage>
              ) : null}
            </ItemWrapper>
          </li>
        </LabelList>
        <BtnStepList>
          <li>
            <BtnStep type="submit" accent>
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
