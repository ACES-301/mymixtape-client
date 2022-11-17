import React from "react";
import SpotifyPlayer from "react-spotify-player";
import NotesModal from "./NotesModal";
import { Button, Container } from "react-bootstrap";
import NotesCard from './NotesCard';

const size = {
  width: "100%",
  height: 300,
};
const view = "list"; // or 'coverart'
const theme = "white"; // or 'white'

class SavedPlaylists extends React.Component {

  render() {
    return (
      <>
        <h1>My Mixtapes</h1>
        {this.props.savedPlaylists.map((playlist) => (
          <Container>
            <Button
              className="contentButton"
              onClick={() => {
                this.props.handleSelectPlaylist(playlist);
                console.log('selected playlist:',this.props.selectedPlaylist);
              }
              }>
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
            <NotesCard />
          </Container>
        ))}
      </>
    );
  }
}

export default SavedPlaylists;
