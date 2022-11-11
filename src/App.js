import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import SavedPlaylists from './SavedPlaylists'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withAuth0 } from "@auth0/auth0-react";
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPlaylists: [],
      newPlaylist: {},
      notes: []
    }
  }

  async componentDidMount() {
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
      <div className='app'>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={this.props.auth0.isAuthenticated ?
                  <Content 
                  newPlaylist = {this.state.newPlaylist}/>
                :
                <Login />
              }
            >
            </Route>
            <Route
              exact path="/mymixtapes"
              element={<SavedPlaylists 
                          savedPlaylists={this.state.savedPlaylists}/>}
            >
            </Route>
            <Route
              exact path="/about"
              element={<About />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default withAuth0(App);

