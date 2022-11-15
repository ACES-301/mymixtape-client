import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class NotesModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        show: false,
        }
      }
        handleClose = () => this.setState({show: false})
        handleShow = () => this.setState({show: true})
        onSubmit = (event) => {
            event.preventDefault();
            const addNote = {
                title: event.target.noteInput.value
            };
            console.log(`New note added: `, addNote);
            this.props.handleAddNote(addNote);
        }
        render() {
    return (
    <>
      <Button id="addNoteButton" onClick={this.handleShow}>ANNOTATE</Button>

      <Modal id="modalId" show={this.state.show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body><Container>
                <Form onSubmit={this.onSubmit}>

                <Form.Group controlId='noteInput'>
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder="What do you want to remember about this mixtape?"
                    />
                </Form.Group>

                <Button id="modalButton" type="submit" onClick={this.handleClose}>Add Note</Button>

                </Form>
            </Container></Modal.Body>
        <Modal.Footer>
          <Button id="modalButton" variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
            
        
    )
  }
}

export default NotesModal;