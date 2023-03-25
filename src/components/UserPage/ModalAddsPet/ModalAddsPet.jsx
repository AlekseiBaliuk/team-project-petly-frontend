import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import * as SC from './ModalAddsPet.styled';
import { StepTwo } from './StepTwo';
import { StepOne } from './StepOne';

const body = document.getElementsByTagName('body')[0];
const modalRoot = document.querySelector('#modal-root');

export const ModalAddsPet = ({ onClose }) => {
  const [data, setData] = useState({
    name: '',
    date: '',
    breed: '',
    photo: '',
    comments: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    disableBodyScroll(body);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      enableBodyScroll(body);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const makeRequest = formData => {
    console.log('Form submitted', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prevState => ({ ...prevState, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prevState => ({ ...prevState, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne onClose={onClose} next={handleNextStep} data={data} />,
    <StepTwo
      onClose={onClose}
      prev={handlePrevStep}
      next={handleNextStep}
      data={data}
    />,
  ];

  console.log('data', data);

  return createPortal(
    <SC.Backdrop onClick={handleBackdropClick}>
      <SC.Content>
        <SC.Title>Add pet</SC.Title>
        {steps[currentStep]}
        <SC.BtnClose onClick={() => onClose()} type="button">
          <Close />
        </SC.BtnClose>
      </SC.Content>
    </SC.Backdrop>,
    modalRoot,
  );
};
