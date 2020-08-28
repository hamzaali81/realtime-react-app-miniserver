import React, { Component } from 'react';
import Container from '../../components/Container/Container'

export default class Login extends Component {
  constructor(props){
    super(props);
    console.log('props***',props);
    this.login=this.login.bind(this)
  }
  login(){
    this.props.onLogin({
      email:'hamza54834@gmail.com',password: 'admin'
    })
  }
  render() {
    console.log('from render', this.props);
    return (
      <div>
        <Container>
        <h1>Login</h1>
        <input type="email" placeholder="Enter the Email"/>
        <input type="password" placeholder="Enter the password"/>
        <button onClick={this.props.onLogin}>Login Hoja</button>
        </Container>
      </div>
    )
  }
}
