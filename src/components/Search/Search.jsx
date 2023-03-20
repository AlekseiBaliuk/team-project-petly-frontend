import { useState } from 'react';
import {
  SearchInput,
  SearchForm,
  SearchButton,
  SearchIcon,
  SearchCloseIcon,
} from './Search.styled';

export const Search = ({ sendSearch }) => {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (input === true) {
      setSearch('');
      setInput(false);
      sendSearch('');
    }

    if (input === false) {
      setInput(true);
      sendSearch(search);
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
        pattern=".{4,}"
        title="Please enter at least 4 characters"
        onChange={handleChange}
      />
      <SearchButton type="submit" disabled={!search}>
        {input === false ? <SearchIcon /> : <SearchCloseIcon />}
      </SearchButton>
    </SearchForm>
  );
};
