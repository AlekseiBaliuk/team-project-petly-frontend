import { Field, Formik } from 'formik';
import { useState } from 'react';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import * as Yup from 'yup';
import {
  Btn,
  BtnActive,
  BtnContainer,
  DateInput,
  Error,
  Input,
  Label,
  StyledForm,
  Subtitle,
} from './ModalAddsPet.styled';
import { regExp } from 'helpers/regExp';
import uk from 'date-fns/locale/es';
import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';

registerLocale('uk', uk);

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short name')
    .max(16, 'Too long name')
    .matches(regExp.nameRegexp, 'Only letters!')
    .required('This field is required'),
  birthday: Yup.date()
    .max(new Date(), 'Future date not allowed')
    .required('This field is required'),
  breed: Yup.string()
    .min(2, 'Too short name of breed')
    .max(24, 'Too long name of breed')
    .matches(regExp.nameRegexp, 'Only letters!')
    .required('This field is required'),
});

export const StepOne = props => {
  const [startDate, setStartDate] = useState();
  const maxDate = format(new Date(), 'yyyy-MM-dd');
  console.log(maxDate);
  const handleSubmit = values => {
    props.next(values);
  };
  return (
    <Formik
      initialValues={props.data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <StyledForm autoComplete="off">
          <Label>
            <Subtitle>Name pet</Subtitle>
            <Input name="name" type="text" placeholder="Type name pet" />
            <Error name="name" component="div" />
          </Label>
          <Label>
            <Subtitle>Date of birth</Subtitle>
            <Input
              name="birthday"
              type="text"
              placeholder="Type date of birth"
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => {
                e.target.type = 'text';
                e.target.value &&
                  (e.target.value = format(
                    parseISO(e.target.value),
                    'dd.MM.yyyy',
                  ));
              }}
              max={maxDate}
            />
            <Error name="birthday" component="div" />
          </Label>
          <Label>
            <Subtitle>Breed</Subtitle>
            <Input name="breed" type="text" placeholder="Type breed" />
            <Error name="breed" component="div" />
          </Label>
          <BtnContainer>
            <Btn type="button" onClick={() => props.onClose()}>
              Cancel
            </Btn>
            <BtnActive type="submit">Next</BtnActive>
          </BtnContainer>
        </StyledForm>
      )}
    </Formik>
  );
};
