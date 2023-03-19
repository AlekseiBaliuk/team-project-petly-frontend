// import { useDispatch } from 'react-redux';
import {
  SearchInput,
  SearchForm,
  SearchButton,
  SearchIcon,
} from './Search.styled';

export const NewsSearch = () => {
  // const dispatch = useDispatch();
  const handleChange = e => {
    e.preventDefault();
    // const filter = e.target.value;
    //   dispatch(slice(filter.trim()));
  };

  return (
    <SearchForm onSubmit={handleChange}>
      <SearchInput type="text" placeholder="Search" />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchForm>
  );
};
