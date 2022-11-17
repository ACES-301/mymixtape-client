import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddNoteForm from "./AddNoteForm"

class NotesModal extends React.Component {
  render() {
    return (
      <>
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
            <AddNoteForm
            selectedPlaylist = {this.props.selectedPlaylist}
            handleAddNote = {this.props.handleAddNote}/>
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
  }
}

export default NotesModal;
