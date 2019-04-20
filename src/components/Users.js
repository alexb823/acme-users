import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Pager from './Pager';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [],
    };
  }

  getUsers = (index = 0) => {
    return axios
      .get(`https://acme-users-api.herokuapp.com/api/users/${index}`)
      .then(response => response.data)
      .then(({ count, users }) => this.setState({ count, users }))
      .catch(err => console.error(err));
  };

  componentDidMount = () => {
    this.getUsers();
  };

  componentDidUpdate(prevProps) {
    // console.log(this.props);
    // console.log(prevProps);
    if (this.props.match.params.index !== prevProps.match.params.index) {
      this.getUsers(this.props.match.params.index);
    }
  }

  render() {
    const { count, users } = this.state;
    const {history} = this.props;
    const index = this.props.match.params.index*1 || 0;

    return (
      <Fragment>
        <Pager count={count} index={index} history={history} />
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
      </Fragment>
    );
  }
}

export default Users;
