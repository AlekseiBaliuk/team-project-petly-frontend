import { Formik } from 'formik';
import {
  Btn,
  BtnActive,
  BtnContainer,
  Input,
  Label,
  StyledForm,
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
            Name pet
            <Input name="namePet" type="text" placeholder="Type name pet" />
          </Label>
          <Label>
            Date of birth
            <Input
              name="dateOfBirth"
              type="date"
              placeholder="Type date of birth"
            />
          </Label>
          <Label>
            Breed
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
