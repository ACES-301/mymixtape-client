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
            Andra is a software developer currently based in Portland, Oregon. She has an extensive background in hospitality management, leadership, and soft boiling eggs. A highly motivated dev, Andra enjoys collaborating on creative, socially conscious development solutions. When they aren’t programming, Andra enjoys cooking outside, camping, and drinking very good Negronis. 
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
            User-centered full-stack developer from a nonprofit management and marketing background eager to educate and engage communities to act for the public good through technology.
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
            Ezgi is a software developer based in North Seattle, with an education in Psychology and background is customer service. She has chosen to change careers to software development to utilize her skills in problem solving and to create products that can help people’s lives better or easier in someway. She enjoys spending time with her daughter exploring nature, restaurants and cultural events.
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
            Stacy is a Software Developer who currently resides in Renton, WA. She has been practicing as a Dental Hygienist for the past three years and has an extensive background in patient-centered care and working in a collaborative environment. In her free time, she enjoys traveling, trying new restaurants, and hanging with her two cats. 
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