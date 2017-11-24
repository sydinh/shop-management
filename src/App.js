import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from 'store';
import Home from 'pages/Home/';
import Login from 'pages/Login/';
import Admin from 'pages/Admin/';
import ProductForm from 'pages/Admin/Product/productForm';
import ProductUpdate from 'pages/Admin/Product/productUpdate';
import ProductDetail from 'pages/ProductDetail/';
import NotFound from 'pages/NotFound';
import Header from 'layouts/Header';
import { firebaseAuth, isAuthenticated } from 'FirebaseConfig';
import { LoginStore } from 'LocalStorage';
import 'styles/globalStyles';

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated()
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: {from: props.location}
          }} />
      )}
    />
  );
};

class App extends Component {
  state = {
    uid: null
  };

  componentDidMount() {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        LoginStore.setData(user.uid);
        this.setState({uid: user.uid});
      } else {
        LoginStore.clearData();
        this.setState({uid: null});
      }
    });
  }

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
              <AuthRoute path='/admin/products/edit/:productId' component={ProductUpdate} />
              <Route path='/home/product/:productId' component={ProductDetail} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  };
};

export default App;
