import {
  PlusIcon,
  Button,
  Text,
  ButtonWrapper,
} from './AddNoticeButton.styled';

export const AddNoticeButton = () => {
  return (
    <ButtonWrapper>
      <Text>Add pet</Text>
      <Button type="button">
        <PlusIcon />
      </Button>
    </ButtonWrapper>
  );
};
