import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from './container/Main';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} /> 
              <Route path="/profile" component={Main} /> 
              <Route path="/" exact component={Main} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
