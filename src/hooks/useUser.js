import { useSelector } from 'react-redux';
import {
  selectUserData,
  selectUserPets,
  selectIsLoading,
  selectError,
} from 'redux/user/userSelectors';

export const useUser = () => {
  const userData = useSelector(selectUserData);
  const userPets = useSelector(selectUserPets);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    userData,
    userPets,
    isLoading,
    error,
  };
};
