import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FormikWizard } from 'formik-wizard-form';
import * as Yup from 'yup';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import * as SC from './ModalAddsPet.styled';
import { MainInfo } from './MainInfo';
import { AdditionalInfo } from './AdditionalInfo';

const modalRoot = document.querySelector('#modal-root');

export const ModalAddsPet = ({ onClose }) => {
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

  return createPortal(
    <SC.Backdrop onClick={handleBackdropClick}>
      <SC.Content>
        <SC.Title>Add pet</SC.Title>
        <FormikWizard
          initialValues={{
            namePet: '',
            dateOfBirth: '',
            breed: '',
            photo: null,
            comments: '',
          }}
          onSubmit={values => console.log(values)}
          validateOnNext
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
                comments: Yup.string()
                  .min(2)
                  .max(16)
                  .required('Email is required'),
              }),
            },
          ]}
        >
          {({
            currentStepIndex,
            renderComponent,
            handlePrev,
            handleNext,
            isNextDisabled,
            isPrevDisabled,
            isLastStep,
          }) => (
            <>
              {renderComponent()}
              <button type="button" onClick={handlePrev}>
                {currentStepIndex === 0 ? 'Cancel' : 'Previous'}
              </button>
              <button type="button" onClick={handleNext}>
                {currentStepIndex === 1 ? 'Done' : 'Next'}
              </button>
            </>
          )}
        </FormikWizard>
        <SC.BtnClose onClick={() => onClose()} type="button">
          <Close />
        </SC.BtnClose>
      </SC.Content>
    </SC.Backdrop>,
    modalRoot,
  );
};
