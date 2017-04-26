import React, { Component } from 'react';
import './App.css';
import BookItem from './BookItem';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <BookItem book={{ id: 6, title: "The Mermaids Singing", author: "Miss Lilyan McCullough", publisher: "SAGE Publications", genre: "Reference book" }} ownsBook={true}/>
      </div>
    );
  }
}

export default App;
