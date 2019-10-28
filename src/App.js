import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    username: 'Stu',
    // username: 'Laura',
    // username: 'Mathew'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render () {
    return (
      <div>
        <h1>Hello this is my Udemy Assignment with React!</h1>
        <UserInput changed={this.usernameChangedHandler}currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
      </div>
    )
  }
};

export default App;

// name={this.state.UserInput[0].name} age={this.state.UserInput[0].age}