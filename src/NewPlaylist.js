import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

const size = {
    width: '100%',
    height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

class NewPlaylist extends React.Component {
    render() {
        return (
            <>
            <h1>Fresh Mixtape</h1>
            <SpotifyPlayer
  uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
  size={size}
  view={view}
  theme={theme}
/>
</>
        )
    }
}

export default NewPlaylist;




