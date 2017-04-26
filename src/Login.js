import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './App.css';

class Nerdmeter extends Component {
  render() {
    return (
      <p>Hello</p>
    )
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '' };
  }
  handleUsernameChange(event) {
    this.setState({ name: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/sessions',
      data: {user: this.state},
    }).done((response) => {
      // SEND SOMETHING TO APP CLASS
      ReactDOM.render(<Nerdmeter />, document.getElementById("content"))
      console.log("You are logged in, but what now?")
    });
    }
  render() {
    return (
      <div className="loginForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Username" onChange={this.handleUsernameChange.bind(this)} />
          <input type="password" placeholder="Password" onChange={this.handlePasswordChange.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;