import React from 'react';
import Login from './screens/login'
import Signup from './screens/signup'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
