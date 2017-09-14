import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/';
import Login from './pages/Login/';
import Admin from './pages/Admin/';
import NotFound from './pages/NotFound';
import { fakeAuth } from 'fakeAuth';
import LogoutButton from 'pages/Login/LogoutButton';
import 'styles/globalStyles';

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        fakeAuth.isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
      )}
    />
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <LogoutButton />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <AuthRoute path='/admin' component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
