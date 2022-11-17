import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.selectedPlaylist);

    this.state = {
      _id: this.props.selectedPlaylist._id,
      notes: this.props.selectedPlaylist.notes,
      uri: this.props.selectedPlaylist.uri,
    };
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.handleAddNote(this.state);
    this.props.handleOnHide();
  };
  
  handleNotesChange = (event) => this.setState({ notes: event.target.value });

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="noteInput">
            <Form.Control
              style={{width: '450px'}}
              type="text"
              placeholder="What do you want to remember about this mixtape?"
              onChange={this.handleNotesChange}
            />
          </Form.Group>
          <Button className="contentButton" variant="contained" type="submit">
            Add Note
          </Button>
        </Form>
      </Container>
    );
  }
}

export default AddNoteForm;
