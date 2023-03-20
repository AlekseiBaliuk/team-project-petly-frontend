import {
  PlusIcon,
  PlusIconS,
  Button,
  Text,
  ButtonWrapper,
} from './AddNoticeButton.styled';
import { deviceWindows } from '../../../devices';

export const AddNoticeButton = ({openModal}) => {
  return (
    <ButtonWrapper>
      {!deviceWindows.beforeTablet && <Text>Add pet</Text>}
      <Button type="button" onClick={openModal}>
        {deviceWindows.beforeTablet ? <PlusIconS /> : <PlusIcon />}

        {deviceWindows.beforeTablet && <Text>Add pet</Text>}
      </Button>
    </ButtonWrapper>
  );
};
