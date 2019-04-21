import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Pager from './Pager';
import Search from './Search';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      users: [],
      searchTerm: '',
    };
  }

  componentDidMount = () => {
    if (this.props.match.params.searchTerm) this.getResults();
    else this.getUsers();
  };

  componentDidUpdate(prevProps) {
    const { index, searchTerm } = this.props.match.params;
    if (index !== prevProps.match.params.index && !searchTerm) this.getUsers();
    if (index !== prevProps.match.params.index && searchTerm) this.getResults();
  }

  getUsers = () => {
    const index = this.props.match.params.index || 0;
    return axios
      .get(`https://acme-users-api.herokuapp.com/api/users/${index}`)
      .then(response => response.data)
      .then(({ count, users }) => this.setState({ count, users }))
      .catch(err => console.error(err));
  };

  getResults = () => {
    const { searchTerm } = this.props.match.params;
    const index = this.props.match.params.index || 0;
    return axios
      .get(
        `https://acme-users-api.herokuapp.com/api/users/search/${searchTerm}/${index}`
      )
      .then(response => response.data)
      .then(({ count, users }) => this.setState({ count, users, searchTerm }))
      .catch(err => console.error(err));
  };

  handleChange = ({ target }) => {
    const searchTerm = target.value;
    this.setState({ searchTerm });
  };

  onClear = () => {
    this.setState({ searchTerm: '' });
  };

  render() {
    const { count, users, searchTerm } = this.state;
    const index = this.props.match.params.index * 1 || 0;
    const currentSearch = this.props.match.params.searchTerm;
    return (
      <Fragment>
        <Pager count={count} searchTerm={searchTerm} index={index} />
        <Search
          searchTerm={searchTerm}
          currentSearch={currentSearch}
          handleChange={this.handleChange}
          onClear={this.onClear}
        />
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
