import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <div className="muted-credit">  
      <Navbar collapseOnSelect expand="lg" variant="dark" className='footer'>
        <Navbar.Brand className='footer2'>Authors: Andra, Camilla, Ezgi, Stacy</Navbar.Brand>
      </Navbar>
      </div>
    )
  }
}

export default Footer;
