import { Formik } from 'formik';
import {
  Btn,
  BtnActive,
  BtnContainer,
  Input,
  Label,
  StyledForm,
  Subtitle,
} from './ModalAddsPet.styled';

export const StepOne = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <StyledForm>
          <Label>
            <Subtitle>Name pet</Subtitle>
            <Input name="namePet" type="text" placeholder="Type name pet" />
          </Label>
          <Label>
            <Subtitle>Date of birth</Subtitle>
            <Input
              name="dateOfBirth"
              type="text"
              placeholder="Type date of birth"
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => (e.target.type = 'text')}
            />
          </Label>
          <Label>
            <Subtitle>Breed</Subtitle>
            <Input name="breed" type="text" placeholder="Type breed" />
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
