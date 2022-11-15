import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import SavedPlaylists from './SavedPlaylists'
// import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { withAuth0 } from "@auth0/auth0-react";
// import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from './Sidebar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPlaylists: [],
      newPlaylist: [],
      notes: [],
      keyword: '',
      genre: ''
    }
  }

  // async componentDidMount() {
  //   // new for lab 15
  //   // if (this.props.auth0.isAuthenticated) {
  //   //   const res = await this.props.auth0.getIdTokenClaims();
  //   //   const jwt = res.__raw;

  //   // leave this console here in order to grab your token for backend testing in Thunder Client
  //   // console.log('token: ', jwt);

  //   const config = {
  //     // headers: { "Authorization": `Bearer ${jwt}` },
  //     method: 'get',
  //     baseURL: process.env.REACT_APP_SERVER,
  //     url: '/playlist'
  //   }

  //   const playlistResponse = await axios(config);

  //   console.log("Playlist from SpotifyApi: ", playlistResponse.data);

  //   this.setState({ newPlaylist: playlistResponse.data });
  // };



  componentDidMount = async () => {
    try {
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/playlist',
      }
      const response = await axios(config);
      console.log('playlist from mongo: ', response.data);
      this.setState({savedPlaylists: response.data})
    } catch (error) {
      console.error('Error with get', error);
    }
  }

  handleSearchPlaylist = async (event) => {
    event.preventDefault();
    try {
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/playlist',
      }
      const response = await axios(config);
      this.setState({ newPlaylist: response.data})
      console.log('new playlist from spotify :', response.data);
      console.log("Search successful ", this.state.newPlaylist);
    } catch (error) {
      console.error('Error with search' , error);

    }
  }

  handleSavePlaylist = async (playlistToBeCreated) => {
    try {
      const config = {
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/playlist',
        data: playlistToBeCreated
      }
      const response = await axios(config);
      this.setState({ savedPlaylists: [...this.state.savedPlaylists, response.data] })
      console.log(response.data);
      console.log("Post successful ", this.state.savedPlaylists);
    } catch (error) {
      console.error('Error with post', error);

    }
  }

  handleChangeKeyword = (event) => {
    event.preventDefault();
    this.setState({ keyword: event.target.value})
  }

  handleChangeGenre = (event) => {
    event.preventDefault();
    this.setState({ genre: event.target.value})
  }

  handleAddNote = async (noteToBeAdded) => {
    try {
      const config = {
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/playlist',
        data: noteToBeAdded
      }

      const res = await axios(config);
      this.setState({ notes: [...this.state.notes, res.data] });
    } catch (err) {
      console.error('Error is in the App.js in the handleAddNote Function: ', err);
      this.setState({ errMessage: `Status Code ${err.res.status}: ${err.res.data}` });
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <div className='App'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='notSidebar'>
            <Routes>
              <Route
                exact path="/"
                element={
                  // this.props.auth0.isAuthenticated ?
                  <Content
                    newPlaylist={this.state.newPlaylist}
                    handleSavePlaylist={this.handleSavePlaylist}
                    handleSearchPlaylist={this.handleSearchPlaylist} 
                    handleChangeKeyword={this.handleChangeKeyword}
                    handleChangeGenre={this.handleChangeGenre}
                    keyword={this.state.keyword}
                    genre={this.state.genre}
                  />
                  // :
                  // <Login />
                }
              >
              </Route>
              <Route
                exact path="/mymixtapes"
                element={<SavedPlaylists
                  savedPlaylists={this.state.savedPlaylists}
                  newNote={this.state.notes} />}
              >
              </Route>
              {/* <Route
                exact path="/about"
                element={<About />}
              > */}
              {/* </Route> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    )
  }
}


export default App;

