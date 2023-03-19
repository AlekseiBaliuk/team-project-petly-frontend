import React, { Fragment } from 'react';

import CustomField from '../../../CustomAuthField';

const RegisterFormStepTwo = props => {
  const { errors } = props;

  return (
    <Fragment>
      <CustomField
        name="name"
        label="name"
        placeholder="name"
        errors={errors}
        touched={{}}
      />
      <CustomField
        name="location"
        label="location"
        placeholder="city/region"
        errors={errors}
        touched={{}}
      />
      <CustomField
        name="phone"
        label="phone"
        placeholder="mobile phone"
        data-pattern="+**(***)***-**-**"
        data-prefix="+38(0"
        errors={errors}
        touched={{}}
      />
    </Fragment>
  );
};

export default RegisterFormStepTwo;
