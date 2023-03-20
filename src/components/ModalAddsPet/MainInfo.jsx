import { Form, Input, Label } from './ModalAddsPet.styled';

export const MainInfo = () => {
  return (
    <Form>
      <Label>
        <span>Name pet</span>

        <Input name="name" type="text" placeholder="Type name pet" />
      </Label>
      <Label>
        Date of birth
        <Input name="date" type="date" placeholder="Type date of birth" />
      </Label>
      <Label>
        Breed
        <Input name="breed" type="text" placeholder="Type breed" />
      </Label>
    </Form>
  );
};
