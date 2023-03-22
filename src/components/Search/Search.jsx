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
      setTimeout(() => setInput(false), 500);
      sendSearch('');
    }

    if (input === false) {
      setTimeout(() => setInput(true), 500);
      sendSearch(search);
    }
  };

  const handleChange = e => {
    if (input === true) {
      setTimeout(() => setInput(false), 500);
    }

    const filter = e.target.value;

    if (!filter) {
      sendSearch(filter);
    }

    setSearch(filter);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
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
