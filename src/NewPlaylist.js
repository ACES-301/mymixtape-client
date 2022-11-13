import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import Button from '@mui/material/Button';


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
                {this.props.newPlaylist.map(playlist =>
                    <>
                        <SpotifyPlayer
                            uri={playlist.uri}
                            size={size}
                            view={view}
                            theme={theme} />
                            <Button 
                            onChange={this.props.handleSavePlaylist(playlist)} variant="outlined">Save to My Mixtapes</Button>
                    </>
                )}

            </>
        )
    }
}

export default NewPlaylist;




