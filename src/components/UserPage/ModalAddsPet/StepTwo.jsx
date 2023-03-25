import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
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
  // image: Yup.mixed(),
  comments: Yup.string()
    .min(8, 'The message is too short')
    .max(120, 'The message is too long'),
});

export const StepTwo = props => {
  // const [avatar, setAvatar] = useState(null);

  const handleSubmit = values => {
    props.next(values, true);
    props.onClose();
  };

  // const handleChange = e => {
  //   e.preventDefault();
  //   const av = URL.createObjectURL(e.target.files[0]);
  //   const data = new FormData();
  //   data.append('image', e.target.files[0]);
  //   setAvatar(av);
  // };

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
              {/* {values.image ? <img src={values.image}></img> : <Plus />} */}
              <Plus />
              <UploadInput
                name="image"
                type="file"
                accept="image/*"
                onChange={e => {
                  console.dir(e.currentTarget.files[0]);
                }}
              ></UploadInput>
            </UploadDiv>
          </UploadLabel>
          <Label>
            <Subtitle>Comments</Subtitle>
            <Field name="comments">
              {({ field }) => (
                <CommentTextarea placeholder="Type breed" {...field} />
              )}
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
