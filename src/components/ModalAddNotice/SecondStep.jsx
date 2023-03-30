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
  TitleSex,
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
import { useNavigate } from 'react-router-dom';
import { addNotice } from 'redux/notices/noticesOperations';
import { updateCategory } from 'redux/pets/petsSlice';
import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const SecondStep = ({
  adminModal,
  isBtnCategory,
  setModalData,
  modalData,
  initialValuesModalData,
  setBtnCategory,
  clearData,
}) => {
  const [fieldValue, setFieldValue] = useState({});
  const [imgSrc, setImageSrc] = useState('');

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
    location: yup
      .string()
      .required('Required')
      .test({
        name: 'Location type',
        exclusive: true,
        message: 'You must type your *City, Region*',
        test: value =>
          value.split(' ').length === 2 &&
          value.split(' ')[0].endsWith(',') &&
          value.indexOf(',') === value.lastIndexOf(','),
      })
      .matches(/^[A-Za-z\s]+,\s[A-Za-z\s]+$/, 'City, Region!')
      .min(2, 'Too Short!')
      .max(28, 'Too Long!'),
    price: yup
      .string()
      .default('1')
      .matches(/^\d+$/, 'Please enter only number!')
      .test({
        name: 'First number not zero',
        exclusive: true,
        message: 'Please enter number, not from zero first!',
        test: value => value && Number(value.split('')[0]) !== 0,
      }),
    comments: yup
      .string()
      .required('Required')
      .min(8, 'Too Short!')
      .max(120, 'Too Long!'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: modalData,
    validationSchema,
    onSubmit: values => {
      if (!isBtnCategory === 'sell') {
        values.price = '1';
      }
      if (values.sex === 'none') {
        Notify.warning('Please select the gender of your pet!');
        return;
      }
      if (isBtnCategory === 'sell' && values.price === '') {
        Notify.warning('Please enter a price!');
        return;
      }
      if (!fieldValue.size) {
        Notify.warning('Please select a photo!');
        return;
      }

      const birthday = format(parseISO(modalData.birthday), 'dd.MM.yyy');

      const requestData = {
        ...modalData,
        ...values,
        birthday,
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
      navigate('/notices/own');
      dispatch(updateCategory('my-ads'));
      adminModal('none', true);
      setBtnCategory('none');
      setModalData(initialValuesModalData);
    },
  });

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
        <TitleSex>The sex:</TitleSex>
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
                {imgSrc.length === 0 ? <Plus /> : null}
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
