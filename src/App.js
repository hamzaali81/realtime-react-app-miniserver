import React, { Component } from "react";
import Login from "./Screen/Login/App";
import Dashboard from "./Screen/Dashboard/App";
import AddForm from "./Screen/AddForm/App";
import Container from "./components/Container/Container";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: false,
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(user) {
    console.log("user jo login hoa", user);
    this.setState({ user: true });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Container>


        {!user && <Login text="Hello Pakistan" onLogin={this.onLogin} />}
        {user && <Dashboard />}
        <AddForm />

        </Container>

      </div>
    );
  }
}
