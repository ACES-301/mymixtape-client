import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import NotesModal from './NotesModal';

const size = {
    width: '100%',
    height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'


class SavedPlaylists extends React.Component {
    render() {
        return (
            <>
                <h1>My Mixtapes</h1>
                {this.props.savedPlaylists.map(playlist =>
                <>
                <NotesModal />
                <SpotifyPlayer
                        uri={playlist.uri}
                        size={size}
                        view={view}
                        theme={theme} />
                        </>
                )
                }
            </>
        )
    }
}

export default SavedPlaylists;

