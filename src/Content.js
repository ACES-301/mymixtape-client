import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import InputForm from './InputForm'
// import NavBar from './NavBar';
import NewPlaylist from './NewPlaylist';


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // savedPlaylists: [],
      newPlaylist: {},
      // notes: []
    }
  }

  async componentDidMount() {
    console.log(this.props.auth0);
    // new for lab 15
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      // leave this console here in order to grab your token for backend testing in Thunder Client
      console.log('token: ', jwt);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/playlist'
      }

      const playlistResponse = await axios(config);

      console.log("Playlist from SpotifyApi: ", playlistResponse.data);
      
      this.setState({ newPlaylist: playlistResponse.data });
    }
  }

  render() {
    return (
      <div className='content'>
        <InputForm
        handleSearchPlaylist = {this.props.handleSearchPlaylist}
        handleChangeKeyword = {this.props.handleChangeKeyword}
        handleChangeGenre = {this.props.handleChangeGenre}
        />
        {this.props.newPlaylist.length>0 &&
        <NewPlaylist
            newPlaylist = {this.props.newPlaylist}
            handleSavePlaylist = {this.props.handleSavePlaylist}
            keyword={this.props.keyword}
            genre={this.props.genre}
        />}
      </div>
    )
  }
}

export default withAuth0(Content);