import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './Home';
import NavTabs from './NavTabs';
import Users from './Users';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      users: [],
    };
  }

  getUsers = () => {
    return axios
      .get('https://acme-users-api.herokuapp.com/api/users/')
      .then(response => response.data)
      .then(({ count, users }) => this.setState({ count, users }))
      .catch(err => console.error(err));
  };

  componentDidMount = () => {
    this.getUsers();
  };

  render() {
    const { count, users } = this.state;

    return (
      <Router>
        <Container>
          <h1 className="my-4">Acme Users</h1>
          <Route component={NavTabs} />
          <Route exact path="/" component={Home} />
          <Route exact path="/users" render={() => <Users users={users} />} />
        </Container>
      </Router>
    );
  }
}

export default App;
