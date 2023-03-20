import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import CustomField from '../CustomAuthField';
import { ButtonRegister } from '../RegisterForm/RegisterForm/RegisterForm.styled';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(7, 'Too short!').max(32, 'Too lond!').required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <label htmlFor="email">
            <CustomField
              type="text"
              name="email"
              placeholder="email"
              errors={errors}
              touched={touched}
            />
            <ErrorMessage name="email" render={msg => <div>{msg}</div>} />
          </label>

          <label htmlFor="password">
            <CustomField
              type="password"
              name="password"
              placeholder="password"
              errors={errors}
              touched={touched}
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <ButtonRegister type="submit">Login</ButtonRegister>
        </Form>
      )}
    </Formik>
  );
};
