import {
  PlusIcon,
  PlusIconS,
  Button,
  Text,
  ButtonWrapper,
} from './AddNoticeButton.styled';
import { deviceWindows } from '../../../devices';

export const AddNoticeButton = () => {
  return (
    <ButtonWrapper>
      {!deviceWindows.beforeTablet && <Text>Add pet</Text>}
      <Button type="button">
        {deviceWindows.beforeTablet ? <PlusIconS /> : <PlusIcon />}

        {deviceWindows.beforeTablet && <Text>Add pet</Text>}
      </Button>
    </ButtonWrapper>
  );
};
