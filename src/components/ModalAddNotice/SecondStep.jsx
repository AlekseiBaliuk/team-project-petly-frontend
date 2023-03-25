import { useEffect, useState } from 'react';
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
  AddImg,
} from './ModalAddNotice.styled';
import { LabelInput } from './LabelInput';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import { ReactComponent as Plus } from 'staticImages/icon-plus.svg';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { SexLists } from './SexList';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ValidationMessage } from './ModalAddNotice.styled';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/noticesOperations';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const SecondStep = ({
  adminModal,
  isBtnCategory,
  setModalData,
  modalData,
  initialValuesModalData,
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

  const validationSchema = yup.object().shape({
    location: yup
      .string()
      .required('Required')
      .matches(/^[A-Za-z\s]+,\s[A-Za-z\s]+$/, 'City, Country!')
      .min(2, 'Too Short!')
      .max(28, 'Too Long!')
      .test({
        name: 'Location type',
        exclusive: true,
        message: 'You must type your *City, Country*',
        test: value =>
          value.split(' ').length === 2 &&
          value.split(' ')[0].endsWith(',') &&
          value.indexOf(',') === value.lastIndexOf(','),
      }),
    price: yup.number().notOneOf([0], 'Please enter another number').positive(),
    // image: yup.string().url().nullable().required('Required'),
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
      if (values.sex === 'none') {
        Notify.warning('Please select the gender of your pet!');
        return;
      }

      const requestData = {
        ...modalData,
        ...values,
      };

      if (requestData.price === '') delete requestData.price;
      if (requestData.image === '') delete requestData.image;

      const formData = new FormData();

      for (const key in requestData) {
        formData.append(`${key}`, requestData[key]);
      }

      formData.append('image', fieldValue);

      setModalData(requestData);
      dispatch(addNotice(formData));
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
        <BtnClose type="button" onClick={() => adminModal('none', true)}>
          <Close />
        </BtnClose>
        <Title>Add pet</Title>
        <Subtitle>Please, fill the data about the pet</Subtitle>
        <TitlePoint>The sex:</TitlePoint>
        <SexLists formik={formik} />
        <LabelList>
          <li>
            <LabelInput
              title="Location:"
              name="location"
              type="text"
              placeholder="Type location"
              formik={formik}
            />
          </li>
          {isBtnCategory === 'sell' && (
            <li>
              <LabelInput
                title="Price:"
                name="price"
                type="text"
                placeholder="Type price"
                formik={formik}
              />
            </li>
          )}
          <li>
            <ItemWrapper>
              <Label>Load the pet’s image:</Label>
              <AddDiv>
                <Plus />
                <AddInput
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleUpload}
                  value={formik.values.image}
                ></AddInput>
                {imgSrc.length > 0 ? (
                  <AddImg src={imgSrc} alt="images" />
                ) : null}
              </AddDiv>
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
