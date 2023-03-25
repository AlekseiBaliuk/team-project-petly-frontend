import React, { Fragment } from 'react';

import MaskInput from 'components/MaskInput';
import CustomField from '../../../CustomAuthField';

import { Label, ValidationMessage } from '../StepOne/stepOne.styled';

const RegisterFormStepTwo = props => {
  const { errors, touched } = props;

  return (
    <Fragment>
      <Label>
        <CustomField
          name="name"
          label="name"
          placeholder="name"
          errors={errors}
          touched={touched}
        />
        <ValidationMessage name="name" component="div" />
      </Label>
      <Label>
        <CustomField
          name="location"
          label="location"
          placeholder="city/region"
          errors={errors}
          touched={touched}
        />
        <ValidationMessage name="location" component="div" />
      </Label>
      <Label>
        <CustomField
          name="phone"
          label="phone"
          placeholder="mobile phone"
          data-pattern="+**(***)***-**-**"
          data-prefix="+38(0"
          onInput={MaskInput.maskInput}
          onFocus={MaskInput.onMaskedInputFocus}
          onBlur={MaskInput.onMaskedInputBlur}
          errors={errors}
          touched={touched}
        />
        <ValidationMessage name="phone" component="div" />
      </Label>
    </Fragment>
  );
};

export default RegisterFormStepTwo;
