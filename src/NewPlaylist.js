import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import Button from '@mui/material/Button';


const size = {
    width: '100%',
    height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'white'; // or 'white'

class NewPlaylist extends React.Component {

    render() {
        return (
            <>
                <h1>Fresh Mixtape</h1>
                {this.props.newPlaylist.map(playlist =>
                ((playlist.keyword.includes(this.props.keyword) || playlist.genre === this.props.genre) || (playlist.keyword.includes(this.props.keyword) && playlist.genre === this.props.genre)) &&
                    <>
                        <SpotifyPlayer
                            uri={playlist.uri}
                            size={size}
                            view={view}
                            theme={theme} />
                        <Button id="contentButton" 
                        onClick={()=> {
                            const playlisToBeSaved = {
                                genre: playlist.genre,
                                keyword: playlist.keyword,
                                uri: playlist.uri
                              }
                              console.log(`playlist to be saved: `, playlisToBeSaved);
                              this.props.handleSavePlaylist(playlisToBeSaved);
                        }} 
                        variant="outlined">SAVE TO MY MIXTAPES</Button>
                    </>
                )}

            </>
        )
    }
}

export default NewPlaylist;




