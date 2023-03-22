import { LabelList } from './ModalAddNotice.styled';
import { LabelInput } from './Label';

export const LabelInputList = () => {
  const labelForm = [
    {
      title: 'Tittle of ad:',
      name: 'title',
      type: 'text',
      placeholder: 'Type name pet',
    },
    {
      title: 'Name pet:',
      name: 'name',
      type: 'text',
      placeholder: 'Type name pet',
    },
    {
      title: 'Date of birth:',
      name: 'dateOfBirth',
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
        />
      ))}
    </LabelList>
  );
};
