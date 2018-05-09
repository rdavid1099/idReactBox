import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SubmitEmail from './components/SubmitEmailComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.submitEmail = this.submitEmail.bind(this);
    this.trackEmailState = this.trackEmailState.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
    this.state = {
      emailInput: '',
      email: '',
      uid: '',
      loggedIn: false,
      loading: false,
      newUserForm: false,
      errorMessage: '',
    };
  }
  
  errorHandling(params) {
    if (params.logout) {
      this.setState({
        emailInput: '',
        email: '',
        uid: '',
        loggedIn: false,
        loading: false,
      });      
    }
    this.setState({ errorMessage: params.msg });
    console.error(params.e);
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
    e.preventDefault();
    this.setState({ loading: true })
    this.closeAlert();
    try {
      const dbCall = await fetch(`http://localhost:5555/api/v1/user?email=${this.state.emailInput}`);
      const user = await dbCall.json();
      user.error ? this.setState({ newUserForm: true }) : this.loginUser(user);      
    } catch(e) {
      this.errorHandling({ e: e,msg: 'Sorry. Something went wrong. Please try again later.', logout: true });
    }
  }
  
  logout(e) {
    e.preventDefault();
    this.setState({
      emailInput: '',
      email: '',
      uid: '',
      loggedIn: false,
      loading: false
    });
  }
  
  closeAlert() {
    this.setState({ errorMessage: '' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IdReactBox{this.state.email.length ? `, ${this.state.email}` : ' ¯\\_(ツ)_/¯'}</h1>
        </header>
        <p className="App-intro">
          Where storing your ideas and hitting random API endpoints is our business.
        </p>
        {
          !!this.state.errorMessage.length &&
            <div className="container">
              <div className="alert alert-danger flash-alert" role="alert" onClick={this.closeAlert}>
                { this.state.errorMessage }
              </div>            
            </div>
        }
        <SubmitEmail
          submitEmail={this.submitEmail}
          trackEmailState={this.trackEmailState}
          logout={this.logout}
          loading={this.state.loading}
          user={this.state.email}
        />
      </div>
    );
  }
}

export default App;
