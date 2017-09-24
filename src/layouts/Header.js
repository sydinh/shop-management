import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  Button,
  Menu,
  MenuItem,
  Popover,
  Position,
} from '@blueprintjs/core';
import { AuthStore } from 'LocalStorage';

class Header extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    // fakeAuth.signout(() => {
    //   this.props.history.push('/')
    // })
  }

  render() {
    const subMenu = (
      <Menu className='pt-light'>
        <MenuItem iconName='pt-icon-log-out' text='Logout' onClick={this.logout} />
      </Menu>
    );

    return (
      <nav className='pt-navbar pt-dark pt-fixed-top'>
        <div className='container'>
          <div className='pt-navbar-group pt-align-left'>
            <div className='pt-navbar-heading'>
              <Link to='/'>Shop Management</Link>
            </div>
          </div>
          <div className='pt-navbar-group pt-align-right'>
            {AuthStore.isAuthenticated() &&
              <div className='pt-button-group pt-minimal'>
                <Button text='Hà Hữu Tín' />
                <Popover content={subMenu} position={Position.BOTTOM_RIGHT}>
                  <Button className='pt-intent-success pt-icon-caret-down' />
                </Popover>
              </div>
            }
            {!AuthStore.isAuthenticated() &&
              <Link to='/login' className='pt-button pt-intent-success pt-icon-log-in'>Login</Link>
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
