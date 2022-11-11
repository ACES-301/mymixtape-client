import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='footer'>
        <Navbar.Brand>Authors: Andra, Camilla, Ezgi, Stacy</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
