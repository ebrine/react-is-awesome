import React, { Component } from 'react';

class LoginButton extends Component {
  render() {
    return (
      <button onClick={this.props.login}>LoginButton</button>
    )
  }
}
export default LoginButton;
