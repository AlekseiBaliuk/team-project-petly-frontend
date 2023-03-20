import { Input, Label } from './ModalAddsPet.styled';

export const MainInfo = () => {
  return (
    <>
      <Label>
        Name pet
        <Input type="text" />
      </Label>
      <Label>
        Date of birth
        <Input type="date" />
      </Label>
      <Label>
        Breed
        <Input type="text" />
      </Label>
    </>
  );
};
