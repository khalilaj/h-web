import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import LogIn from './Containers/LogIn';
import Layout from './Containers/Layout';


class Router extends Component{
  render(){
    return (
      <Switch>
          <Route exact path='/' component={Layout} />
          <Route exact path='/login' component={LogIn} />
      </Switch>
    )
  }
}

export default Router;
