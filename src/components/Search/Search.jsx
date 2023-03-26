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
    setTimeout(() => setInput(true), 500);
    sendSearch(search);
  };

  const handleChange = e => {
    if (input === true) {
      setTimeout(() => setInput(false), 500);
    }

    const filter = e.target.value;

    if (!filter) {
      setTimeout(() => sendSearch(filter), 500);
    }

    setSearch(filter);
  };

  const handleClick = e => {
    if (input === true) {
      setSearch('');
      sendSearch('');
      setTimeout(() => setInput(false), 500);
    }

    if (input === false) {
      setTimeout(() => setInput(true), 500);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        name="search"
        type="text"
        value={search}
        placeholder="Search"
        title="Please enter at least 4 characters"
        onChange={handleChange}
      />
      <SearchButton type="submit" disabled={!search} onMouseDown={handleClick}>
        {input === false ? <SearchIcon /> : <SearchCloseIcon />}
      </SearchButton>
    </SearchForm>
  );
};
