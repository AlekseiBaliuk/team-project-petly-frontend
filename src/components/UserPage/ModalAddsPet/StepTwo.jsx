import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Btn,
  BtnActive,
  BtnContainer,
  CommentTextarea,
  Label,
  StyledForm,
  Subtitle,
  Text,
  UploadDiv,
  UploadInput,
  UploadLabel,
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
          <UploadLabel>
            <UploadDiv>
              <Plus />
              <UploadInput
                name="photo"
                type="file"
                onChange={e => {
                  console.dir(e.currentTarget.files[0]);
                }}
              ></UploadInput>
            </UploadDiv>
          </UploadLabel>
          <Label>
            <Subtitle>Comments</Subtitle>
            <Field name="comments" placeholder="Type breed">
              {({ field }) => <CommentTextarea {...field} />}
            </Field>
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
