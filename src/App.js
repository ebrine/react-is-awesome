import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Board from './components/Board';
import Header from './components/Header';
import GenreList from './components/GenreList';
import Login from './components/Login';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.searchByGenre = this.searchByGenre.bind(this)
    this.clickOff = this.clickOff.bind(this)
    this.addRead = this.addRead.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      currentUser: "Devin",
      books: [],
      booksRead: [],
      loginForm: true,
      name: '',
      password: ''
    }
  }

  getTitleAuthor(books) {
    return books.map((book) => {
      return {title: book.title, author: book.author}
    })
  }

  searchByGenre(event) {
    let genre = event.target.id
    genre = genre.replace(/\s/, "%20")
    $.ajax({
      url: `https://react-is-awesome-backend.herokuapp.com/books/search/${genre}`,
      }).done((response) => {
        this.setState({books: this.getTitleAuthor(response)})
    })
  }

  clickOff(event) {
    this.setState({books: []})
  }

  addRead(event) {
    const books = this.state.booksRead.slice();
    books.push(event.target.id)
    this.setState({ booksRead: books })
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name
    const password = this.state.password
    $.ajax({
      url: "https://react-is-awesome-backend.herokuapp.com/sessions",
      method: "POST",
      data: {user: {name: name, password: password}}
    }).done((response) => {
      console.log(response)
    }).fail((msg) => {
      console.log(msg);
    })
  }

  handleNameChange(name){
    this.setState({
      name: name
    })
  }

  handlePasswordChange(password){
    this.setState({
      password: password
    })
  }


  render() {
    const name = this.state.name;
    const password = this.state.password;
    if (this.state.loginForm === true){
      return (
      <Login
        onSubmit={this.handleSubmit}
        onNameChange={this.handleNameChange} onPasswordChange={this.handlePasswordChange}
        password={password}
        name={name} />
      )
    }else {
    return (
      <div className="App" onClick={this.clickOff}>
        <Header title={this.state.currentUser} />
        <Board searchFunction={this.searchByGenre}/>
        <GenreList bookList={this.state.books} addRead={this.addRead}/>
      </div>
    );
    }
  }
}
export default App;
