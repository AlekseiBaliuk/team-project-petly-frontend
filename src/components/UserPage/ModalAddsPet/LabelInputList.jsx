import { LabelList } from '../../ModalAddNotice/ModalAddNotice.styled';
import { LabelInput } from '../../ModalAddNotice/LabelInput';

export const LabelInputList = ({ formik }) => {
  const labelForm = [
    {
      title: 'Name pet:',
      name: 'name',
      type: 'text',
      placeholder: 'Type name pet',
    },
    {
      title: 'Date of birth:',
      name: 'birthday',
      type: 'text',
      placeholder: 'Type date of birth',
    },
    {
      title: 'Breed:',
      name: 'breed',
      type: 'text',
      placeholder: 'Type breed',
    },
  ];

  return (
    <LabelList>
      {labelForm.map(({ title, name, type, placeholder }) => (
        <LabelInput
          key={name}
          title={title}
          name={name}
          type={type}
          placeholder={placeholder}
          formik={formik}
        />
      ))}
    </LabelList>
  );
};
