import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SubmitEmail from './components/SubmitEmailComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.submitEmail = this.submitEmail.bind(this);
    this.trackEmailState = this.trackEmailState.bind(this);
    this.state = {
      email: '',
      user: '',
    }
  }
  
  trackEmailState({ target }) {
    const email = target.value;
    this.setState({ email })
  }

  submitEmail(e) {
    e.preventDefault();
    fetch(`http://localhost:5555/api/v1/user?email=${this.state.email}`)
      .then(response => response.json())
      .then(user => this.setState({ user: user.email }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IdReactBox {this.state.user.length ? this.state.user : '¯\\_(ツ)_/¯'}</h1>
        </header>
        <p className="App-intro">
          Where storing your ideas and hitting random API endpoints is our business.
        </p>
        <SubmitEmail 
          submitEmail={this.submitEmail}
          trackEmailState={this.trackEmailState}
        />
      </div>
    );
  }
}

export default App;
