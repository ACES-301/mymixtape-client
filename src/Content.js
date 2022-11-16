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
    // console.log('Auth0 in Content: ', this.props.auth0);
    if (this.props.auth0.isAuthenticated) {
      const response = await axios.get('http://localhost:3001/login');
      console.log('THIS IS THE RESPONSE YOU HAVE BEEN LOOKING FOR! ', response.data);
      // this.props.setspotifyUserProfile(response.data);
      // this.callCallback();
      this.setState({spotifyUserProfileGenerator: response.data })
    }
  }

  async callCallback() {
    const response = await axios.get(`http://localhost:3001/callback?code=AQAKfr_j9YPwJAcVRvCNbVVZ2deeX7EKS0SXotUd3FDJlj4NQ0hOASDvJKqqeYKScypfLp4b4yMk4RuvaGdp4ukSe8gpOSmzrD8E-MVgXhTkwN1sJ0xfnVii1zf5vZpQT_U3x442hNxL2DEtV8AjDR7DLqONhOPCBxfrsOvwjHKryMNupXQHfxhgHNo02ECE6D5hdhAZoEO8qYBi5n0bKHBdzT_zdQg&state=kNezTavu2Kpc0Gau`)
    console.log("MEOWWWW! ", response.data);
    // http://localhost:3001/callback/?code=AQAKfr_j9YPwJAcVRvCNbVVZ2deeX7EKS0SXotUd3FDJlj4NQ0hOASDvJKqqeYKScypfLp4b4yMk4RuvaGdp4ukSe8gpOSmzrD8E-MVgXhTkwN1sJ0xfnVii1zf5vZpQT_U3x442hNxL2DEtV8AjDR7DLqONhOPCBxfrsOvwjHKryMNupXQHfxhgHNo02ECE6D5hdhAZoEO8qYBi5n0bKHBdzT_zdQg&state=kNezTavu2Kpc0Gau
  }


  render() {
    return (
      <>
      <a href={this.state.spotifyUserProfileGenerator} >Click Me for your Spotify Profile</a>
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