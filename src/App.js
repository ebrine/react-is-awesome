import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import NavBar from './components/NavBar';
import Content from './containers/Content';
// eslint-disable-next-line react/prefer-stateless-function

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      friends: [],
      current: 'login',
    }
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: 'https://react-is-awesome-backend.herokuapp.com/books'
    }).done((response) => {
      this.setState({
        books: response });
    });

    $.ajax({
      method: 'GET',
      url: 'https://react-is-awesome-backend.herokuapp.com/users'
    }).done((response) => {
      this.setState({
        friends: response });
    })
  }

  go(event) {
    this.setState({
      current: event.target.id
    })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>BookConnect</h1>
          <h2>See what your friends are reading!</h2>
        </div>
        <NavBar onClick={(event) => this.go(event)} />
        <Content books={this.state.books} friends={this.state.friends} current={this.state.current} />
      </div>
    );
  }
}

export default App;
