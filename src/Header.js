import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import AuthButtons from './AuthButtons';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header'>
          <Navbar.Brand className='headerTitle'>My Mixtape</Navbar.Brand>
          <AuthButtons />
        </Navbar>
      </div>
    )
  }
}

export default withAuth0(Header);