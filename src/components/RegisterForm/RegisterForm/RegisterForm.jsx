import { FormikWizard } from 'formik-wizard-form';
import RegisterFormStepOne from 'components/RegisterForm/RegisterSteps/StepOne';
import RegisterFormStepTwo from 'components/RegisterForm/RegisterSteps/StepTwo';
import * as yup from 'yup';
import {
  ButtonRegister,
  ButtonPrevius,
  ButtonNext,
} from './RegisterForm.styled';

export const RegisterForm = () => {
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
      onSubmit={values => console.log(values)}
      activeStepIndex={0}
      steps={[
        {
          component: RegisterFormStepOne,

          validationSchema: yup.object().shape({
            email: yup.string().email().required('required'),
            password: yup
              .string()
              .min(7, 'Too short!')
              .max(32, 'Too lond!')
              .required('required'),
            confirmPassword: yup
              .string()
              .oneOf([yup.ref('password')], 'Password mismatch')
              .required('required'),
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

            phone: yup
              .string()
              .required('Phone is required')
              .matches(
                /^\+38\(0..\)...-..-../,
                'Phone should be in format +38(067)123-45-67',
              ),
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
        activeStepIndex,
      }) => (
        <>
          {renderComponent()}
          {isLastStep && (
            <ButtonRegister
              type="submit"
              onClick={handleSubmit}
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
              onClick={handleNext}
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
