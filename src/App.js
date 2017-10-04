import React, { Component } from 'react';
import logo from './Assets/logo.svg';
import SampleComponent from './components/SampleComponent';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crypto Subscriber</h1>
        </header>
          <SampleComponent />
      </div>
    );
  }
}

export default App;
