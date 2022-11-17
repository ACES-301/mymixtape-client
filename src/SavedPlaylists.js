import React from "react";
import SpotifyPlayer from "react-spotify-player";
import NotesModal from "./NotesModal";
import { Button, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const size = {
  width: "100%",
  height: 300,
};
const view = "list"; // or 'coverart'
const theme = "white"; // or 'white'

class SavedPlaylists extends React.Component {

  render() {
    return (
      <div className="savedPlaylists">
        <h1>My Mixtapes</h1>
        <br></br>
        {this.props.savedPlaylists.map((playlist) => (
          <Container style = {{marginBottom:"2em"}}>
            {console.log(playlist)}
            <Button
              className="contentButton"
              onClick={() => this.props.handleSelectPlaylist(playlist._id)}>
              Annotate</Button> 

            <NotesModal
              handleSelectPlaylist={this.props.handleSelectPlaylist}
              handleAddNote={this.props.handleAddNote}
              selectedPlaylist={this.props.selectedPlaylist}
              show={this.props.show}
              handleOnHide={this.props.handleOnHide}
            />

            <Button
              className="contentButton"
              onClick={() => this.props.handleDeletePlaylist(playlist)}
              variant="outlined"
            >
            Remove from My Mixtapes
            </Button>

            <SpotifyPlayer
              uri={playlist.uri}
              size={size}
              view={view}
              theme={theme}
            />
                <Card className="card">
                <Card.Header className="cardHeader"></Card.Header>
                <Card.Body className="cardBody">
                  <Card.Text className="cardText">
                   <h3>{playlist.notes}</h3>
                  </Card.Text>
                </Card.Body>
                </Card>
          </Container>
        ))}
      </div>
    );
  }
}

export default SavedPlaylists;
