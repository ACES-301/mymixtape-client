import React from 'react';
import { Navbar } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <Navbar collapseOnSelect expand="lg" variant="dark" className='header'>
          <Navbar.Brand className='headerTitle'>My Mixtape</Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}

export default withAuth0(Header);