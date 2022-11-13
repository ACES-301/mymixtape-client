import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Andra from './images/andra.png';
import Camilla from './images/camilla.png';
import Ezgi from './images/ezgi.jpg';
import Stacy from './images/stacy.jpg';

class About extends React.Component {
  render() {
    return (
      <Row xs={2} lg={2} className="g-2" style={{ width: '60rem', marginTop: '50px', marginLeft: '100px', padding:'30px', textAlign: 'center'}}>
        <Col>
        <Card border="light" style={{ width: '400px'}}>
          <Card.Img variant="top" src={Andra}/>
          <Card.Body>
            <Card.Title>Andra Steele</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link  style={{textDecoration: 'none', color: 'gray'}} href="https://github.com/asteele1493"><FontAwesomeIcon icon={faGithub} size="2x" /></Card.Link>
            <Card.Link  style={{textDecoration: 'none', color: 'gray'}} href="https://www.linkedin.com/in/andra-steele/"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></Card.Link>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card border="light" style={{ width: '400px'}}>
          <Card.Img variant="top" src={Camilla} />
          <Card.Body>
            <Card.Title>Camilla Rees</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link style={{textDecoration: 'none', color: 'gray'}} href="https://github.com/camillarees"><FontAwesomeIcon icon={faGithub} size="2x" /></Card.Link>
            <Card.Link style={{textDecoration: 'none', color: 'gray'}} href="https://www.linkedin.com/in/camilla-rees/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Card.Link>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card border="light" style={{ width: '400px'}}>
          <Card.Img variant="top" src={Ezgi} />
          <Card.Body>
            <Card.Title>Ezgi Coban</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link style={{textDecoration: 'none', color: 'gray'}} href="https://github.com/ezgi-c"><FontAwesomeIcon icon={faGithub} size="2x" /></Card.Link>
            <Card.Link style={{textDecoration: 'none', color: 'gray'}} href="https://www.linkedin.com/in/ezgi-coban3261/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Card.Link>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card border="light" style={{ width: '400px'}}>
          <Card.Img variant="top" src={Stacy}/>
          <Card.Body>
            <Card.Title>Stacy Yu</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link style={{textDecoration: 'none', color: 'gray'}} href="https://github.com/stacyyuu"><FontAwesomeIcon icon={faGithub} size="2x" /></Card.Link>
            <Card.Link style={{textDecoration: 'none', color: 'gray'}} href="https://www.linkedin.com/in/stacyyuu/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Card.Link>
          </Card.Body>
        </Card>
        </Col>
    </Row>
    )
  }
}

export default About;