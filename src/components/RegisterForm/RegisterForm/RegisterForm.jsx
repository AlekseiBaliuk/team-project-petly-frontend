import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FormikWizard } from 'formik-wizard-form';
import * as yup from 'yup';

import { signup } from '../../../redux/auth/authOperations';
import RegisterFormStepOne from 'components/RegisterForm/RegisterSteps/StepOne';
import RegisterFormStepTwo from 'components/RegisterForm/RegisterSteps/StepTwo';

import {
  ButtonRegister,
  ButtonPrevius,
  ButtonNext,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = evt => {
    const newData = { ...evt };
    const phoneNumber = Object.values(evt.phone).join('').toString();
    const pattern = /\+38\((\d{3})\)(\d{3})-(\d{2})-(\d{2})/;

    newData['phone'] = phoneNumber.replace(pattern, '+38$1$2$3$4');
    delete newData.confirmPassword;
    dispatch(signup({ credentials: newData, navigate }));
  };

  return (
    <FormikWizard
      initialValues={{
        email: '',
        password: '',
        name: '',
        location: '',
        phone: '',
        confirmPassword: '',
      }}
      onSubmit={values => handleSubmit(values)}
      activeStepIndex={0}
      steps={[
        {
          component: RegisterFormStepOne,

          validationSchema: yup.object().shape({
            email: yup
              .string()
              .email()
              .required('Email is required')
              .matches(
                /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                'Email must much the following "example@mail.com"',
              ),
            password: yup
              .string()
              .min(7, 'Too short!')
              .max(32, 'Too lond!')
              .required('Required')
              .matches(/^\S*$/, 'Not white space'),

            confirmPassword: yup
              .string()
              .oneOf([yup.ref('password')], 'Password mismatch')
              .required('Password is required'),
          }),
        },
        {
          component: RegisterFormStepTwo,

          validationSchema: yup.object().shape({
            name: yup
              .string()
              .required('Name is required')
              .matches(
                /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
                'Name should only contain Latin letters',
              ),
            location: yup
              .string()
              .required('Address is required')
              .matches(
                /[a-z, A-Z]{2},\s([a-z, A-Z]{2,64})$/,
                'Address should be in format: City, Region',
              ),
            phone: yup.string().required('Phone is required'),
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
        validateForm,
        setTouched,
      }) => (
        <>
          {renderComponent()}
          {isLastStep && (
            <ButtonRegister
              type="submit"
              onClick={() => {
                handleSubmit();
                setTouched({
                  name: true,
                  location: true,
                  phone: true,
                });
              }}
              disabled={isNextDisabled}
            >
              Register
            </ButtonRegister>
          )}
          {!isPrevDisabled && (
            <ButtonPrevius
              type="button"
              onClick={handlePrev}
              disabled={isPrevDisabled}
            >
              Back
            </ButtonPrevius>
          )}
          {!isLastStep && (
            <ButtonNext
              type="button"
              onClick={() => {
                validateForm();

                setTouched({
                  email: true,
                  password: true,
                  confirmPassword: true,
                });
                handleNext();
              }}
              disabled={isNextDisabled}
            >
              Next
            </ButtonNext>
          )}
        </>
      )}
    </FormikWizard>
  );
};
