import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Pager = ({ count, index, history }) => {
  let currentPage = index + 1;
  const lastPage = Math.ceil(count / 50);

  return (
    <div className="mb-3">
      <p>
        {count} Results. Page {currentPage} of {lastPage}
      </p>

      <ButtonGroup>
        <Button
          variant="info"
          disabled={currentPage === 1}
          onClick={() => history.push('/users')}
        >
          First
        </Button>

        <Button
          variant="info"
          disabled={currentPage === 1}
          onClick={() => history.push(`/users/${index - 1}`)}
        >
          Prev
        </Button>

        <Button variant="primary">{currentPage}</Button>

        <Button
          variant="info"
          disabled={currentPage===lastPage}
          onClick={() => history.push(`/users/${index + 1}`)}
        >
          Next
        </Button>

        <Button
          variant="info"
          disabled={currentPage===lastPage}
          onClick={() => history.push(`/users/${lastPage - 1}`)}
        >
          Last
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Pager;
