import { useSelector } from 'react-redux';
import { getCategories } from 'redux/pets/petsSelectors';

export const useCategory = () => {
  const activeCategory = useSelector(getCategories);

  return {
    activeCategory,
  };
};
