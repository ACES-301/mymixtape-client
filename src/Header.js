import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import AuthButtons from './AuthButtons';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header'>
          <Navbar.Brand className='headerTitle'>My Mixtape</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          <NavItem><Link to="/mymixtapes" className="nav-link">My Mixtapes</Link></NavItem>
          <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
          <AuthButtons />
        </Navbar>
      </>
    )
  }
}

export default withAuth0(Header);