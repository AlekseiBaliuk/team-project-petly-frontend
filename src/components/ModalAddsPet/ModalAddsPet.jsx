import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FormikWizard } from 'formik-wizard-form';
import * as Yup from 'yup';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import * as SC from './ModalAddsPet.styled';
import { MainInfo } from './MainInfo';
import { AdditionalInfo } from './AdditionalInfo';
import { StepTwo } from './StepTwo';
import { StepOne } from './StepOne';

const modalRoot = document.querySelector('#modal-root');

export const ModalAddsPet = ({ onClose }) => {
  const [data, setData] = useState({
    namePet: '',
    dateOfBirth: '',
    breed: '',
    photo: null,
    comments: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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
        {/* <FormikWizard
          initialValues={{
            namePet: '',
            dateOfBirth: '',
            breed: '',
            photo: null,
            comments: '',
          }}
          onSubmit={values => console.log(values)}
          activeStepIndex={0}
          steps={[
            {
              component: MainInfo,
              validationSchema: Yup.object().shape({
                name: Yup.string().min(2).max(16).required('Name is required'),
                date: Yup.string().required('Date of birth is required'),
                breed: Yup.string()
                  .min(2)
                  .max(16)
                  .required('Breed is required'),
              }),
            },
            {
              component: AdditionalInfo,
              validationSchema: Yup.object().shape({
                photo: Yup.mixed(),
                comments: Yup.string().min(2).max(16),
              }),
            },
          ]}
        >
          {({
            renderComponent,
            handlePrev,
            handleNext,
            handleSubmit,
            isNextDisabled,
            isPrevDisabled,
            isLastStep,
            isFirstStep,
          }) => (
            <>
              {renderComponent()}
              {isFirstStep ? (
                <button type="button" onClick={() => onClose()}>
                  Cancel2
                </button>
              ) : (
                <button type="button" onClick={handlePrev}>
                  Previous2
                </button>
              )}
              {!isLastStep ? (
                <button type="button" onClick={handleNext}>
                  Next2
                </button>
              ) : (
                <button type="submit" onClick={handleSubmit}>
                  Done2
                </button>
              )}
            </>
          )}
        </FormikWizard> */}
        <SC.BtnClose onClick={() => onClose()} type="button">
          <Close />
        </SC.BtnClose>
      </SC.Content>
    </SC.Backdrop>,
    modalRoot,
  );
};
