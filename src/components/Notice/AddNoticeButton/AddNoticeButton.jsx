import {
  PlusIcon,
  Button,
  Text,
  ButtonWrapper,
} from './AddNoticeButton.styled';

export const AddNoticeButton = ({openModal}) => {
  return (
    <ButtonWrapper>
      <Text>Add pet</Text>
      <Button type="button" onClick={openModal}>
        <PlusIcon />
      </Button>
    </ButtonWrapper>
  );
};
