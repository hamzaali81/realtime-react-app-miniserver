import React, { Component } from 'react';


export default class Container extends Component {
  constructor(){
    super();

  }

  

  render() {
    return (
      <div className="App" style={{width:'70%',height:'70%',borderRadius:'15%',backgroundColor: 'grey',padding:30}}>
    Hello World Starts
      {this.props.children}
      </div>
    )
  }
}
