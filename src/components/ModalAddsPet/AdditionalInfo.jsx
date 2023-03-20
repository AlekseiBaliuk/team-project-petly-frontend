import { StyledForm, Input, Label, Text } from './ModalAddsPet.styled';

export const AdditionalInfo = () => {
  return (
    <StyledForm>
      <Text>Add photo and come comments</Text>
      <Label>
        <Input name="Photo" type="file" placeholder="Type name pet" />
      </Label>
      <Label>
        Breed
        <Input name="comments" type="text" placeholder="Type breed" />
      </Label>
    </StyledForm>
  );
};
