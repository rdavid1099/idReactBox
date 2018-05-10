import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StringHelper } from './helpers';

import SubmitEmail from './components/SubmitEmailComponent';
import FlashMessageComponent from './components/FlashMessageComponent';
import IdeasComponent from './components/IdeasComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.submitEmail = this.submitEmail.bind(this);
    this.trackEmailState = this.trackEmailState.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
    this.registerEmail = this.registerEmail.bind(this);
    this.trackNewIdeaState = this.trackNewIdeaState.bind(this);
    this.state = {
      emailInput: '',
      email: '',
      uid: '',
      loggedIn: false,
      loading: false,
      newUserForm: false,
      errorMessage: '',
      guestIdeas: [],
      userIdeas: [],
    };
  }

  errorHandling(params, cb) {
    const msg = params.msg || 'Sorry. Something went wrong. Please try again later.';
    this.setState({ errorMessage: msg });
    console.error(params.e);
    if (cb) { cb() }
  }

  trackEmailState({ target }) {
    const emailInput = target.value;
    this.setState({ emailInput });
  }

  loginUser(user) {
    this.setState({
      email: user.email,
      uid: user.id,
      loggedIn: true,
      loading: false,
      emailInput: '',
    });
  }

  async submitEmail(e) {
    if (e) { e.preventDefault(); }
    this.setState({ loading: true })
    this.closeAlert();
    try {
      const dbCall = await fetch(`http://localhost:5555/api/v1/user?email=${this.state.emailInput}`);
      const user = await dbCall.json();
      user.error ? this.setState({ newUserForm: true, loading: false }) : this.loginUser(user);
    } catch(e) {
      this.errorHandling({ e }, this.logout);
    }
  }

  async registerEmail(e) {
    if (e) { e.preventDefault(); }
    this.setState({ loading: true })
    try {
      const dbCall = await fetch('http://localhost:5555/api/v1/user', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: `email=${this.state.emailInput}`,
      });
      const user = await dbCall.json();
      this.loginUser(user);
    } catch(e) {
      this.errorHandling({ e }, this.logout);
    }
  }

  logout(e) {
    if (e) { e.preventDefault(); }
    this.setState({
      emailInput: '',
      email: '',
      uid: '',
      loggedIn: false,
      loading: false,
      newUserForm: false,
    });
  }

  closeAlert() {
    this.setState({ errorMessage: '' });
  }

  welcome() {
    if (this.state.email.length) {
      return `, ${this.state.email} ${StringHelper.displayEmoji('👋')}`
    } else {
      return ' ¯\\_(ツ)_/¯';
    }
  }

  trackNewIdeaState(e) {
    return
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IdReactBox{this.welcome()}</h1>
        </header>
        <p className="App-intro">
          Where storing your ideas and hitting random API endpoints is our business.
        </p>
        {
          !!this.state.errorMessage.length &&
          <FlashMessageComponent
            errorMessage={this.state.errorMessage}
            closeAlert={this.closeAlert}
          />
        }
        <SubmitEmail
          submitEmail={this.submitEmail}
          trackEmailState={this.trackEmailState}
          logout={this.logout}
          registerEmail={this.registerEmail}
          loading={this.state.loading}
          user={this.state.email}
          newUserForm={this.state.newUserForm}
          emailInput={this.state.emailInput}
        />
        <IdeasComponent
          trackNewIdeaState={this.trackNewIdeaState}
          guestIdeas={this.state.guestIdeas}
          userIdeas={this.state.userIdeas}
        />
      </div>
    );
  }
}

export default App;
