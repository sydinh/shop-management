import React from 'react';
import styled from 'styled-components';
import { fakeAuth } from 'fakeAuth';
import { Redirect } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 10rem;
`;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
    }
    this.login = this.login.bind(this);
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true,
      });
    })
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
        Login
        <button className='pt-button pt-large pt-intent-warning' onClick={this.login}>Login</button>
      </LoginContainer>
    );
  }
}

export default Login;
