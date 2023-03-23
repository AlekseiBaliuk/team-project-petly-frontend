import { Label, Input } from './ModalAddNotice.styled';

export const LabelInput = ({ title, name, type, placeholder, formik }) => {

  return (
    <Label>
      {title}
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
    </Label>
  );
};
