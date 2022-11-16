import React from 'react';
import Card from 'react-bootstrap/Card';
import NotesModal from './NotesModal';

function NotesCard () {
  return (
    <>
    <Card className="card">
      <Card.Header className="cardHeader"> <NotesModal /> </Card.Header>
      {/* { this.props.notes.map(notes => { */}
      <Card.Body className="cardBody">
        <Card.Text className="cardText">
         
        </Card.Text>
      </Card.Body>
          
        {/* })} */}
    </Card>
    </>
  );
}

export default NotesCard;