import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Btn,
  BtnActive,
  BtnContainer,
  Input,
  Label,
  StyledForm,
  Subtitle,
} from './ModalAddsPet.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short name').max(16, 'Too long name'),
  date: Yup.date(),
  breed: Yup.string()
    .min(2, 'Too short name of breed')
    .max(24, 'Too long name of breed'),
});

export const StepOne = props => {
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
        <StyledForm>
          <Label>
            <Subtitle>Name pet</Subtitle>
            <Input name="name" type="text" placeholder="Type name pet" />
            <ErrorMessage name="name" />
          </Label>
          <Label>
            <Subtitle>Date of birth</Subtitle>
            <Input
              name="date"
              type="text"
              placeholder="Type date of birth"
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => (e.target.type = 'text')}
            />
            <ErrorMessage name="date" />
          </Label>
          <Label>
            <Subtitle>Breed</Subtitle>
            <Input name="breed" type="text" placeholder="Type breed" />
            <ErrorMessage name="breed" />
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
