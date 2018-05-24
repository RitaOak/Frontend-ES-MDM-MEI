import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Client from './components/Client';
import Login from './components/Login';
import Worker_Area from './components/Worker_Area';
import Accounts from './components/Accounts';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/worker_area" component={Worker_Area} />
          <Route exact path="/accounts" component={Accounts} />
        </div>
      </Router>
    );
  }
}

export default App;
