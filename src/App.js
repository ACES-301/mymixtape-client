import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import SavedPlaylists from './SavedPlaylists'
// import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withAuth0 } from "@auth0/auth0-react";
import Logout from './Logout';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Buffer } from 'buffer';
// import querystring from 'querystring';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPlaylists: [],
      // newPlaylist: {},
      notes: [],
      code: new URLSearchParams(window.location.search).get("code"),
      state: new URLSearchParams(window.location.search).get("state"),
      // code_verifier: new URLSearchParams(window.location.search).get("code_verifier")
    }
  }

  componentDidMount = async () => {
    if (this.state.code) {
      const config = {
        method: "post",
        baseURL: 'https://accounts.spotify.com/api/token',
        data: URLSearchParams.toString({
          code: this.state.code,
          // redirect_uri: window.location.origin,
          redirect_uri: 'https://dev-xilzfwl68pl0aigp.us.auth0.com/login/callback',
          grant_type: 'authorization_code',
          // client_id: process.env.REACT_APP_CLIENTID
        }),
        headers: {
          'Authorization': 'Basic ' + (new Buffer.from(process.env.REACT_APP_CLIENTID + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64')),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // json: true,
      };
      console.log("AuthOption: ", config);
      const response = await axios(config);
      console.log('Res: ', response.data);
    }
  }


  render() {
    console.log('State: ', this.state);
    console.log('Auth0: ', this.props.auth0);
    return (
      <div className='app'>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={this.props.auth0.isAuthenticated ?
                <Content
                  newPlaylist={this.state.newPlaylist} />
                :
                <Logout />
              }
            >
            </Route>

            <Route
              exact path="/mymixtapes"
              element={<SavedPlaylists
                savedPlaylists={this.state.savedPlaylists} />}
            >
            </Route>
            {/* <Route
              exact path="/about"
              element={<About />}
            > */}
            {/* </Route> */}
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default withAuth0(App);

