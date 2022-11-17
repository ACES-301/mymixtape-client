import React from "react";
import SpotifyPlayer from "react-spotify-player";
import Button from "@mui/material/Button";

const size = {
  width: "100%",
  height: 300,
};
const view = "list"; // or 'coverart'
const theme = "white"; // or 'black'

class NewPlaylist extends React.Component {
  render() {
    return (
      <>
        <h2>Fresh Mixtapes</h2>
        <div className="newPlaylists">
          {this.props.newPlaylist.map((playlist) => (
            <div className="newPlaylist">
              <SpotifyPlayer
                id="spotifyPlayer"
                uri={playlist.uri}
                size={size}
                view={view}
                theme={theme}
              />
              <Button
                className="contentButton"
                variant="contained"
                onClick={() => {
                  const playlisToBeSaved = {
                    uri: playlist.uri,
                  };
                  console.log(`playlist to be saved: `, playlisToBeSaved);
                  this.props.handleSavePlaylist(playlisToBeSaved);
                }}
              >
                SAVE TO MY MIXTAPES
              </Button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default NewPlaylist;
