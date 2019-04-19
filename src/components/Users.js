import React from 'react';
import { Table } from 'react-bootstrap';

const Users = ({ users }) => {
  return (
    <Table striped responsive="md">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Middle Name</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.middleName}</td>
            <td>{user.email}</td>
            <td>{user.title}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
