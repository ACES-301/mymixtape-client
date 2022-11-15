import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import Button from '@mui/material/Button';
import NotesCard from './NotesCard';


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
                {this.props.newPlaylist.find(playlist =>
                ((playlist.keyword.includes(this.props.keyword) || playlist.genre === this.props.genre) || (playlist.keyword.includes(this.props.keyword) && playlist.genre === this.props.genre)) &&
                    <>
                        <SpotifyPlayer
                            uri={playlist.uri}
                            size={size}
                            view={view}
                            theme={theme} />
                        <NotesCard />
                        <Button id="contentButton" onChange={this.props.handleSavePlaylist(playlist)} variant="outlined">SAVE TO MY MIXTAPES</Button>
                    </>
                )}

            </>
        )
    }
}

export default NewPlaylist;




