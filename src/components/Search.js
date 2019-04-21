import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Search = ({ searchTerm, currentSearch, handleChange, onClear }) => {
  const disableSearch = !searchTerm || searchTerm === currentSearch;
  const disableClear = !currentSearch;
  return (
    <InputGroup className="mb-4">
      <FormControl
        placeholder="Search Results"
        value={searchTerm}
        onChange={handleChange}
      />
      <InputGroup.Append>
        <LinkContainer to={`/users/search/${searchTerm}`}>
          <Button variant="info" disabled={disableSearch}>
            Search
          </Button>
        </LinkContainer>

        <LinkContainer to="/users">
          <Button variant="info" disabled={disableClear} onClick={onClear}>
            Clear
          </Button>
        </LinkContainer>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Search;
