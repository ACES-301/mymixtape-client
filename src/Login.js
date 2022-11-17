import React from "react";
import LoginButton from "./LoginButton";
import Cassette from "./images/tape.png"


class Login extends React.Component {
    render() {
        return (
            <div className="login">
            <img className="cassette" src={Cassette}/>
            <h1>Login to Discover New Music</h1>
            <LoginButton />
            </div>
        )
    }
}

export default Login;