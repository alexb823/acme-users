import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './Home';
import NavTabs from './NavTabs';
import Users from './Users';

const App =() => {
    return (
      <Router>
        <Container>
          <h1 className="my-4">Acme Users</h1>
          <Route component={NavTabs} />
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:index?" component={Users} />
        </Container>
      </Router>
    );
  }

export default App;
