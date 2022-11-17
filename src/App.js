import React from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import SavedPlaylists from "./SavedPlaylists";
import About from "./About";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Login from "./Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPlaylists: [],
      newPlaylist: [],
      selectedPlaylist: {},
      notes: [],
      keyword: "",
      genre: "",
      show: false,
    };
  }

  async componentDidMount() {
    try {
      const config = {
        // headers: { "Authorization": `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/playlist",
      };
      const savedResponse = await axios(config);
      this.setState({ savedPlaylists: savedResponse.data });
    } catch (error) {
      console.error("Error with get", error);
    }
  }

  handleSearchPlaylist = async (event) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_SERVER}/search?keyword=${this.state.keyword}&genre=${this.state.genre}`;
    console.log(url);
    const playlistResponse = await axios.get(url);
    console.log(playlistResponse.data);
    this.setState({ newPlaylist: playlistResponse.data });
  };

  handleSavePlaylist = async (playlistToBeSaved) => {
    try {
      const config = {
        method: "post",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/playlist",
        data: playlistToBeSaved,
      };
      const response = await axios(config);
      this.setState({
        savedPlaylists: [...this.state.savedPlaylists, response.data],
      });
      console.log(response.data);
      console.log("Post successful ", this.state.savedPlaylists);
    } catch (error) {
      console.error("Error with post", error);
    }
  };

  handleDeletePlaylist = async (playlistToBeDeleted) => {
    try {
      const proceed = window.confirm(
        `Do you wish to delete ${playlistToBeDeleted._id}?`
      );
      if (proceed) {
        const config = {
          method: "delete",
          baseURL: process.env.REACT_APP_SERVER,
          url: `/playlist/${playlistToBeDeleted._id}`,
        };
        const response = await axios(config);
        console.log(response.data);
        const newPlaylistArr = this.state.savedPlaylists.filter(
          (playlist) => playlist._id !== playlistToBeDeleted._id
        );
        this.setState({ savedPlaylists: newPlaylistArr });
      }
    } catch (error) {
      console.error("Error with delete", error);
    }
  };

  handleChangeKeyword = (event) => {
    event.preventDefault();
    this.setState({ keyword: event.target.value });
  };

  handleChangeGenre = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ genre: event.target.value });
  };

  handleSelectPlaylist = (playlistId) => {
    let selectedPlaylist = this.state.savedPlaylists.find(
      (playlist) => playlist._id === playlistId
    );
    console.log(this.state.savedPlaylists);
    console.log(playlistId);
    console.log(selectedPlaylist);
    this.setState({ show: true, selectedPlaylist}, console.log('selected playlist:',this.state.selectedPlaylist));
  };

  handleOnHide = () => this.setState({ show: false });
  
  handleAddNote = async (playlistToBeUpdated) => {
    console.log(playlistToBeUpdated)

    try {
      const config = {
        method: "put",
        baseURL: process.env.REACT_APP_SERVER,
        url: `/playlist/${playlistToBeUpdated._id}`,
        data: playlistToBeUpdated,
      };

      const response = await axios(config);
      console.log(response.data);
      const updatedPlaylists = this.state.savedPlaylists.map(
        (preExistingPlaylist) => {
          if (preExistingPlaylist._id === response.data._id) {
            return playlistToBeUpdated;
          } else {
            return preExistingPlaylist;
          }
        }
      );
      this.setState({ savedPlaylists: updatedPlaylists });
    } catch (err) {
      console.error(
        "Error is in the App.js in the handleAddNote Function: ",
        err
      );
    }
  };

  render() {
    return (
      <Router>
        <Header />
        {this.props.auth0.isAuthenticated ? (
          <div className="App">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="notSidebar">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Content
                      newPlaylist={this.state.newPlaylist}
                      handleSavePlaylist={this.handleSavePlaylist}
                      handleSearchPlaylist={this.handleSearchPlaylist}
                      handleChangeKeyword={this.handleChangeKeyword}
                      handleChangeGenre={this.handleChangeGenre}
                      keyword={this.state.keyword}
                      genre={this.state.genre}
                    />
                  }
                ></Route>
                <Route
                  exact
                  path="/mymixtapes"
                  element={
                    <SavedPlaylists
                      handleSelectPlaylist={this.handleSelectPlaylist}
                      handleAddNote={this.handleAddNote}
                      handleDeletePlaylist={this.handleDeletePlaylist}
                      savedPlaylists={this.state.savedPlaylists}
                      selectedPlaylist={this.state.selectedPlaylist}
                      newNote={this.state.notes}
                      show={this.state.show}
                      handleOnHide={this.handleOnHide}
                    />
                  }
                ></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/profile" element={<Profile />}></Route>
              </Routes>
            </div>
          </div>
        ) : (
          <>
            <Login />
          </>
        )}
        <Footer />
      </Router>
    );
  }
}

export default withAuth0(App);
