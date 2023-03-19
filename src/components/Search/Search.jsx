// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  SearchInput,
  SearchForm,
  SearchButton,
  SearchIcon,
  SearchCloseIcon,
} from './Search.styled';

// дописать props slice, розкоментувать

export const Search = () => {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState(false);

  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (input === true) {
      setSearch('');
      setInput(false);
    }

    if (input === false) {
      //   // dispatch(slice(search.trim()));
      setInput(true);
    }
  };

  const handleChange = e => {
    if (input === true) {
      setInput(false);
    }

    const filter = e.target.value;
    setSearch(filter);
  };

  return (
    <SearchForm className="News" onSubmit={handleSubmit}>
      <SearchInput
        name="search"
        type="text"
        value={search}
        placeholder="Search"
        pattern=".{5,}"
        title="Please enter at least 5 characters"
        onChange={handleChange}
      />
      <SearchButton type="submit" disabled={!search}>
        {input === false ? <SearchIcon /> : <SearchCloseIcon />}
      </SearchButton>
    </SearchForm>
  );
};
