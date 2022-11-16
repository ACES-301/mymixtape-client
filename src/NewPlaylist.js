import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import Button from '@mui/material/Button';
import NotesCard from './NotesCard';


const size = {
    width: '100%',
    height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'white'; // or 'black'

class NewPlaylist extends React.Component {
    render() {
        return (
            <>
                <h1>Fresh Mixtape</h1>
                {this.props.newPlaylist.map(playlist =>
                    <>
                        <SpotifyPlayer id="spotifyPlayer"
                            uri={playlist.uri}
                            size={size}
                            view={view}
                            theme={theme} />
                        <NotesCard />
                        <Button className="contentButton" onChange={this.props.handleSavePlaylist(playlist)} variant="contained">Save to My Mixtapes</Button>
                    </>
                )}

            </>
        )
    }
}

export default NewPlaylist;




