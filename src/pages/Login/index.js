import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import { firebaseAuth } from 'FirebaseConfig';

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

const Hint = styled.p`
  display: flex;
  font-size: 12px;
  padding: 0 20px;

  em {
    padding-left: 5px;
  }
`;

const AlertError = styled.div`
  margin-bottom: 20px;
`;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
      loading: false,
      email: '',
      password: '',
      error: null,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    const { email, password } = this.state;

    this.setState({
      loading: true,
    });

    firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({
          error: null,
          loading: false,
          redirectToReferrer: true,
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <LoginContainer>
        <LoginBox className='pt-card pt-elevation-1'>
          <Hint>
            <strong>Hint:</strong>
            <em>admin@example.com/12345678</em>
          </Hint>
          <form onSubmit={this.handleLogin}>
            {this.state.error &&
              <AlertError className='pt-callout pt-intent-danger'>{this.state.error}</AlertError>
            }
            <div className='pt-form-group'>
              <div className='pt-form-content'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='pt-input pt-large pt-fill'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='pt-form-group'>
              <div className='pt-form-content'>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='pt-input pt-large pt-fill'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='center-xs'>
              <Button type='submit' className='pt-large pt-intent-primary' loading={this.state.loading}>
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
