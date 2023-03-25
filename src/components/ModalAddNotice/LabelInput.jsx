import { Label, Input } from './ModalAddNotice.styled';
import { ValidationMessage } from './ModalAddNotice.styled';

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
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <ValidationMessage>{formik.errors[name]}</ValidationMessage>
      ) : null}
    </Label>
  );
};
