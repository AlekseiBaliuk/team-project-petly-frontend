import { Formik } from 'formik';
import {
  Btn,
  BtnActive,
  BtnContainer,
  CommentInput,
  Input,
  Label,
  StyledForm,
  Text,
} from './ModalAddsPet.styled';

export const StepTwo = props => {
  const handleSubmit = values => {
    props.next(values, true);
    props.onClose();
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <StyledForm>
          <Text>Add photo and come comments</Text>
          <Label>
            <Input
              name="photo"
              type="file"
              accept="image/*"
              placeholder="Type name pet"
            />
          </Label>
          <Label>
            Breed
            <CommentInput
              name="comments"
              type="text"
              placeholder="Type breed"
            />
          </Label>
          <BtnContainer>
            <Btn type="button" onClick={() => props.prev(values)}>
              Previous
            </Btn>
            <BtnActive type="submit">Done</BtnActive>
          </BtnContainer>
        </StyledForm>
      )}
    </Formik>
  );
};
