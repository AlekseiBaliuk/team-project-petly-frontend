import { Label, Input } from './ModalAddNotice.styled';

export const LabelInput = ({ title, name, type, placeholder }) => {
  return (
    <Label>
      {title}
      <Input name={name} type={type} placeholder={placeholder} />
    </Label>
  );
};
