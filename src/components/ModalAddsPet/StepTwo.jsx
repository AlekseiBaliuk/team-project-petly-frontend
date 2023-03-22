import { Formik } from 'formik';
import {
  AddDiv,
  AddInput,
  Btn,
  BtnActive,
  BtnContainer,
  CommentInput,
  Label,
  StyledForm,
  Subtitle,
  Text,
} from './ModalAddsPet.styled';
import { ReactComponent as Plus } from 'staticImages/icon-plus.svg';

export const StepTwo = props => {
  const handleSubmit = values => {
    props.next(values, true);
    props.onClose();
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <StyledForm>
          <Text>Add photo and some comments</Text>
          <Label>
            <AddDiv>
              <Plus />
              <AddInput name="photo" type="file" accept="image/*"></AddInput>
            </AddDiv>
          </Label>
          <Label>
            <Subtitle>Comments</Subtitle>
            <CommentInput
              as="textarea"
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
