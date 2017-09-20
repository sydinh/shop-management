import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import Home from './pages/Home/';
import Login from './pages/Login/';
import Admin from './pages/Admin/';
import ProductForm from './pages/Admin/Product/productForm';
import NotFound from './pages/NotFound';
import { fakeAuth } from 'fakeAuth';
import Header from 'layouts/Header';
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
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <AuthRoute exact path='/admin' component={Admin} />
              <AuthRoute path='/admin/products/add' component={ProductForm} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  };

};

export default App;
