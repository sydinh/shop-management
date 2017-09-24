import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import {
  Button,
} from '@blueprintjs/core';
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
    this.login = this.login.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(e) {
    e.preventDefault();
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

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
          <form onSubmit={this.login}>
            {this.state.user &&
              <p>{this.state.user}</p>
            }
            {this.state.error &&
              <div className='pt-callout pt-intent-danger' style={{ marginBottom: 20 }}>{this.state.error}</div>
            }
            <div className='pt-form-group'>
              <div className='pt-form-content'>
                <input
                  type='text'
                  id='email'
                  name='email'
                  className='pt-input pt-large pt-fill'
                  placeholder='Email'
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </div>
            </div>
            <div className='pt-form-group'>
              <div className='pt-form-content'>
                <input
                  type="password"
                  id='password'
                  name='password'
                  className='pt-input pt-large pt-fill'
                  placeholder='Password'
                  onChange={this.handleChange}
                  value={this.state.password}
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
