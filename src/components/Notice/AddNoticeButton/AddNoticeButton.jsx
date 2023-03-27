import { Notify } from 'notiflix';
import { useAuth } from 'hooks/useAuth';

import {
  PlusIcon,
  PlusIconS,
  Button,
  Text,
  ButtonWrapper,
} from './AddNoticeButton.styled';
import { deviceWindows } from 'devices';

export const AddNoticeButton = ({ openModal }) => {
  const { isLoggedIn } = useAuth();
  const modalOpener = () => {
    isLoggedIn
      ? openModal()
      : Notify.failure('Please, log in to add favorites');
  };
  return (
    <ButtonWrapper>
      <Button type="button" onClick={modalOpener}>
        {deviceWindows.beforeTablet ? <PlusIconS /> : <PlusIcon />}
        <Text>Add pet</Text>
      </Button>
    </ButtonWrapper>
  );
};
