import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import Home from './pages/Home/';
import Login from './pages/Login/';
import Admin from './pages/Admin/';
import NotFound from './pages/NotFound';
import Header from 'layouts/Header';
import { firebaseAuth, storageKey, isAuthenticated } from 'FirebaseConfig';
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
  constructor() {
    super();
    this.state = {
      uid: null,
    }
  }

  componentDidMount() {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({uid: user.uid});
      } else {
        window.localStorage.removeItem(storageKey);
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
              <AuthRoute path='/admin' component={Admin} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  };
};

export default App;
