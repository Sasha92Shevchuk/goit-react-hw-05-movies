import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, SearchButton } from './SearchForm.styled';
import { toast } from 'react-toastify';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value.toLowerCase().trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
    if (query === '') {
      toast.error('Enter you search request');
      return;
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
        <SearchButton type="submit"> Search </SearchButton>
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
