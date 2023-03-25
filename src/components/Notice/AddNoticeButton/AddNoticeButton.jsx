import { Notify } from 'notiflix';
import { useAuth } from 'hooks/useAuth';

import {
  PlusIcon,
  PlusIconS,
  Button,
  Text,
  ButtonWrapper,
} from './AddNoticeButton.styled';
import { deviceWindows } from '../../../devices';

// export const AddNoticeButton = ({openModal}) => {
//   return (
//     <ButtonWrapper>
//       {!deviceWindows.beforeTablet && <Text>Add pet</Text>}
//       <Button type="button" onClick={openModal}>
//         {deviceWindows.beforeTablet ? <PlusIconS /> : <PlusIcon />}

//         {deviceWindows.beforeTablet && <Text>Add pet</Text>}
//       </Button>
//     </ButtonWrapper>
//   );
// };

export const AddNoticeButton = ({ openModal }) => {
  const { isLoggedIn } = useAuth();
  const modalOpener = () => {
    console.log('modalOpenerisRunning');
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
