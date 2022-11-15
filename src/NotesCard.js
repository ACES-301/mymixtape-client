import React from 'react';
import Card from 'react-bootstrap/Card';
import NotesModal from './NotesModal';

function NotesCard () {
  return (
    <>
    <Card>
      <Card.Header> <NotesModal /> </Card.Header>
      <Card.Body>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default NotesCard;