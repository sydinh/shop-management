import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { fakeAuth } from 'fakeAuth';

const LogoutButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

class LogoutButton extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    fakeAuth.signout(() => {
      this.props.history.push('/')
    })
  }

  render() {
    if (!fakeAuth.isAuthenticated) {
      return null;
    }
    return (
      <LogoutButtonContainer>
        <button className='pt-button pt-intent-danger' onClick={this.logout}>Sign out</button>
      </LogoutButtonContainer>
    );
  }
}

export default withRouter(LogoutButton);
