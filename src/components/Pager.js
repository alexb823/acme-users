import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Pager = ({ count, searchTerm, index }) => {
  let currentPage = index + 1;
  const lastPage = Math.ceil(count / 50);
  let url = '/users';
  if (searchTerm) url = `/users/search/${searchTerm}`;

  return (
    <div className="mb-3">
      <p>
        {count} Results. Page {currentPage} of {lastPage}
      </p>

      <ButtonGroup>
        <LinkContainer to={`${url}/0`}>
          <Button variant="info" disabled={currentPage === 1}>
            First
          </Button>
        </LinkContainer>

        <LinkContainer to={`${url}/${index - 1}`}>
          <Button variant="info" disabled={currentPage === 1}>
            Prev
          </Button>
        </LinkContainer>

        <Button variant="primary">{currentPage}</Button>

        <LinkContainer to={`${url}/${index + 1}`}>
          <Button variant="info" disabled={currentPage === lastPage}>
            Next
          </Button>
        </LinkContainer>

        <LinkContainer to={`${url}/${lastPage - 1}`}>
          <Button variant="info" disabled={currentPage === lastPage}>
            Last
          </Button>
        </LinkContainer>
      </ButtonGroup>
    </div>
  );
};

export default Pager;
