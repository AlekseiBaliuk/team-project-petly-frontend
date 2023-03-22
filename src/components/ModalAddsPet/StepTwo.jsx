import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
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

const validationSchema = Yup.object().shape({
  photo: Yup.mixed(),
  comments: Yup.string()
    .min(8, 'The message is too short')
    .max(120, 'The message is too long'),
});

export const StepTwo = props => {
  const handleSubmit = values => {
    props.next(values, true);
    props.onClose();
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
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
            <ErrorMessage name="comments" />
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
