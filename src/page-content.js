import React, { Component } from 'react';
import './App.css';
import MainContainer from './main-container.js';
import NavBar from './navbar.js';
import RegistrationForm from './registration-form.js';
import LogInForm from './login-form.js';
import HomePage from './homepage.js';
import $ from 'jquery'

class PageContent extends Component {
  constructor(){
    super();
    this.state = {
      navbar: {
        buttons: ['Register', 'Login', 'Home'],
      },
      mainContainer: {
        content: null,
      },
    }
  }
  handlePostLogin(page){
    const homepage = <HomePage handlePostLogin={this.handlePostLogin}/>;
    page.setState( {
      navbar: {
        buttons: ['Logout', 'Home'],
      },
      mainContainer: {
        content: homepage,
      },
    })
  }

  handleClick(i){
    const registrationForm = <RegistrationForm handlePostLogin={this.handlePostLogin}/>;
    const loginForm = <LogInForm handlePostLogin={this.handlePostLogin} pageRef={this} />;
    const homepage = <HomePage handlePostLogin={this.handlePostLogin}/>;
    let stateVariable = null;

    if (i === "Logout"){
      $.ajax( {
        url: 'http://localhost:3000/session/',
        method: 'DELETE',
        crossDomain: true,
        xhrFields: { withCredentials: true }
      }).done((response) => {
        console.log(response.message)
      })
    }
    else {
      switch(i){
        case "Register":
          stateVariable = registrationForm;
          break;
        case "Login":
          stateVariable = loginForm;
          break;
        case "Home":
          stateVariable = homepage;
          break;
        default:
          console.log("OMG errorz");
          break;
      }
      this.setState( {
        mainContainer: {
          content: stateVariable,
        }
      })
    }
  }
  render() {
    return (
      <div className="main-container">
        <NavBar onClick={(i) => this.handleClick(i)} buttons={this.state.navbar.buttons}/>
        <MainContainer content={this.state.mainContainer.content} />
      </div>
    );
  }
}

export default PageContent;
