import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import withAuthentication from '../containers/withAuthentication';
import UserSettings from '../components/UserSettings';
import NotFound from '../components/NotFound';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-139627569-1');
  ReactGA.pageview('/dashboard');
}
initializeReactGA()

class App extends Component {
  
  render() {
    return (
     
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />

          <Route path="/UserSettings" exact component={withAuthentication(UserSettings)} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      
    );
  }
}

export default App;