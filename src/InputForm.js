import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class InputForm extends React.Component {
  render() {
    return (
      <Container className="inputform">
        <Form onSubmit={this.props.handleSearchPlaylist}>
          <Form.Group controlId='formKeyword'>
            <Form.Label style={{fontSize: '25px'}}>Discover New Music</Form.Label>
            <Form.Control
              size='lg'
              type='text'
              placeholder="Keyword" 
              onChange={this.props.handleChangeKeyword}
              />
          </Form.Group>

          <Form.Group controlId='formGenre'>
          <Form.Control
          size='lg'
          as="select"
            onChange={this.props.handleChangeGenre}
            >
              <option>Pick a Genre</option>
              <option value="Alternative">Alternative</option>
              <option value="Classical">Classical</option>
              <option value="Dance">Dance</option>
              <option value="Indie">Indie</option>
              <option value="Pop">Pop</option>
              <option value="Rap">Rap</option>
              <option value="Rock">Rock</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit" className="contentButton">Search!</Button>
        </Form>

      </Container>
    );
  }
}

export default InputForm;
