import React from 'react';
import styled from 'styled-components';
import { fakeAuth } from 'fakeAuth';
import { Redirect } from 'react-router-dom';
import {
  Button,
} from '@blueprintjs/core';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const LoginBox = styled.div`
  width: 400px;

  form {
    padding: 10px 20px;
  }
`;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
      loading: false,
    }
    this.login = this.login.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  login() {
    this.setState({ loading: true });
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true,
        loading: false,
      });
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <LoginContainer>
        <LoginBox className='pt-card pt-elevation-1'>
          <form onSubmit={this.handleSubmit}>
            <div className='pt-form-group'>
              <div className='pt-form-content'>
                <input id="username" className='pt-input pt-large pt-fill' placeholder='Username' type="text" dir="auto" disabled />
              </div>
            </div>
            <div className='pt-form-group'>
              <div className='pt-form-content'>
                <input id="password" className='pt-input pt-large pt-fill' placeholder='Password' type="password" dir="auto" disabled />
              </div>
            </div>
            <div className='center-xs'>
              <Button className='pt-large pt-intent-primary' loading={this.state.loading} onClick={this.login}>
                Login
              </Button>
            </div>
          </form>
        </LoginBox>
      </LoginContainer>
    );
  }
}

export default Login;
