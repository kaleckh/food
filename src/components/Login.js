import React, { Component } from "react";
import "./Login.css";

import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  login = () => {
    this.props.history.push("/map");
  };
  register = () => {
    this.props.history.push("/map");
  };

  render() {
    return (
      <body>
        <div>
          <div className="content">
            <input
              onChange={(event) => {
                this.setState({
                  username: event.target.value,
                });
              }}
              className="input"
              type="text"
              id="fname"
              name="firstname"
              placeholder="username..."
            />
            <input
              className="input"
              onChange={(event) => {
                this.setState({
                  password: event.target.value,
                });
              }}
              type="text"
              id="password"
              name="password"
              placeholder="password..."
            />
            <button
              className="button login"
              onClick={() => {
                this.login();
              }}
            >
              login
            </button>
            <button
              className="button register"
              onClick={() => {
                axios({
                  method: "post",
                  url: `${process.env.REACT_APP_SERVER_URL}/users`,
                  data: {
                    username: this.state.username,
                    password: this.state.password,
                  },
                }).then((res) => {
                  this.props.createUser(res.data.username, res.data.id);
                  // let tournament = res.data
                  // this.props.createTournament({
                  //   type: tournament.type,
                  //   teamSize: tournament.teamSize,
                  //   enrolled: tournament.enrolled,
                  //   date: tournament.date,
                  // });
                  this.props.history.push("/map");
                });
              }}

              // onClick={() => {
              //   this.setState({
              //     showPopup: true,
              // });

              // }}
            >
              register
            </button>
          </div>
        </div>
      </body>
    );
  }
}

export default Login;
