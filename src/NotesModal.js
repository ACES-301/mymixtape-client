import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

class NotesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.selectedPlaylist._id,
      notes: this.props.selectedPlaylist.notes,
      show: false,
    };
  }
  // handleClose = () => this.setState({show: false})
  // handleShow = () => this.setState({show: true})
  handleSubmit = (event) => {
    event.preventDefault();
    // const addNote = {
    //     title: event.target.noteInput.value
    // };
    // console.log(`New note added: `, addNote);
    // this.props.handleAddNote(addNote);
    console.log(this.state);
    this.props.handleAddNote(this.state);
    this.props.handleOnHide();
  };
  handleNotesChange = (event) => this.setState({ notes: this.props.selectedPlaylist.notes, ...event.target.value });

  render() {
    return (
<<<<<<< HEAD
    <>
      <Button id="annotateButton" onClick={this.handleShow}>Annotate</Button>
=======
      <>
        {/* <Button id="addNoteButton" 
      onClick={this.handleShow} {...this.props.handleSelectPlaylist}
>>>>>>> d25c4e0b5233d945fff1bc1219a1f0a903776d13

      >ANNOTATE</Button> */}

        <Modal
          id="modalId"
          show={this.props.show}
          onHide={this.props.handleOnHide}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="noteInput">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What do you want to remember about this mixtape?"
                    onChange={this.handleNotesChange}
                  />
                </Form.Group>

<<<<<<< HEAD
                <Button className="contentButton" variant="contained" type="submit" onClick={this.handleClose}>Add Note</Button>

                </Form>
            </Container></Modal.Body>
        <Modal.Footer>
          <Button className="contentButton" variant="contained" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
            
        
    )
=======
                <Button id="modalButton" type="submit">
                  Add Note
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              id="modalButton"
              variant="secondary"
              onClick={this.props.handleOnHide}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
>>>>>>> d25c4e0b5233d945fff1bc1219a1f0a903776d13
  }
}

export default NotesModal;
