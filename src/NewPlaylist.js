import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import Button from '@mui/material/Button';


const size = {
    width: '100%',
    height: 300,
};
const view = 'list'; // or 'coverart'
<<<<<<< HEAD
const theme = 'white'; // or 'black'
=======
const theme = 'white'; // or 'white'
>>>>>>> d25c4e0b5233d945fff1bc1219a1f0a903776d13

class NewPlaylist extends React.Component {

    render() {
        return (
            <>
                <h1>Fresh Mixtape</h1>
                {this.props.newPlaylist.map(playlist =>
                ((playlist.keyword.includes(this.props.keyword) || playlist.genre === this.props.genre) || (playlist.keyword.includes(this.props.keyword) && playlist.genre === this.props.genre)) &&
                    <>
                        <SpotifyPlayer id="spotifyPlayer"
                            uri={playlist.uri}
                            size={size}
                            view={view}
                            theme={theme} />
<<<<<<< HEAD
                        <NotesCard />
                        <Button className="contentButton" onChange={this.props.handleSavePlaylist(playlist)} variant="contained">Save to My Mixtapes</Button>
=======
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
>>>>>>> d25c4e0b5233d945fff1bc1219a1f0a903776d13
                    </>
                )}

            </>
        )
    }
}

export default NewPlaylist;




