import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import InputForm from './InputForm'
import NewPlaylist from './NewPlaylist';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlaylist: {},
      spotifyUserProfileGenerator: ''
    }
  }

  async componentDidMount() {
    console.log('Auth0 in Content: ', this.props.auth0);
    if (this.props.auth0.isAuthenticated) {
      const response = await axios.get('http://localhost:3001/login');
      console.log('THIS IS THE RESPONSE YOU HAVE BEEN LOOKING FOR! ', response.data);
      // this.setState({spotifyUserProfileGenerator: response.data })
      const results = await axios.get(response.data);
      console.log(results);
    }
  }


  render() {
    return (
      <>
        {/* <button onClick={this.getThisLink} >Click me for your Spotify Profile</button> */}
        <InputForm />
        <h1>Recommended Playlist</h1>
        <NewPlaylist
            newPlaylist = {this.props.newPlaylist}
        />
      </>
    )
  }
}

export default withAuth0(Content);