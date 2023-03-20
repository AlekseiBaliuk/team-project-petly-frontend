import { Formik } from 'formik';
import { Input, Label, StyledForm } from './ModalAddsPet.styled';

// export const MainInfo = () => {
//   return (
//     <Form>
//       <Label>
//         <span>Name pet</span>

//         <Input name="name" type="text" placeholder="Type name pet" />
//       </Label>
//       <Label>
//         Date of birth
//         <Input name="date" type="date" placeholder="Type date of birth" />
//       </Label>
//       <Label>
//         Breed
//         <Input name="breed" type="text" placeholder="Type breed" />
//       </Label>
//     </Form>
//   );
// };

export const MainInfo = props => {
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
          <button type="button" onClick={() => props.onClose()}>
            Cancel
          </button>
          <button type="submit">Next</button>
        </StyledForm>
      )}
    </Formik>
  );
};
