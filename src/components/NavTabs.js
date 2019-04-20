import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavTabs = ({ location }) => {
  const pathStart = location.pathname.split('/')[1];
  return (
    <Nav variant="tabs" className="mb-4">
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/"
          className={`${pathStart === '' ? 'active' : ''}`}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/users"
          className={`${pathStart === 'users' ? 'active' : ''}`}
        >
          Users
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavTabs;
