import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.isThePassword = this.isThePassword.bind(this)
  }

  handleChange(event) {
    this.props.onNameChange(event.target.value);
  }

  isThePassword(event) {
    this.props.onPasswordChange(event.target.value);
  }


  render() {
    const errorStyle = {color: 'red'}
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Name:
            <input type="text" value={this.props.name} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" value={this.props.password} onChange={this.isThePassword} />
          </label>
          <input type="submit" />
        </form>
        <p style={errorStyle}>{this.props.error}</p>
      </div>
    )
  }
}
export default Login;
