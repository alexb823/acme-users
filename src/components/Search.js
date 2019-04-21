import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Search = ({ searchTerm, handleChange, onClear}) => {
  return (
    <InputGroup className="mb-4">
      <FormControl
        placeholder="Search Results"
        value={searchTerm}
        onChange={handleChange}
      />
      <InputGroup.Append>
      <LinkContainer to={`/users/search/${searchTerm}`}>
        <Button variant="info">Search</Button>
      </LinkContainer>
        <Button variant="info" onClick={onClear}>Clear</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Search;
