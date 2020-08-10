import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async callExpress() {
    try {
      let response = await fetch('/api/say-hello/JosephThomas')
                            .then(res => res.json());
      console.log(response);
      alert('Hi this is a response from the backend: ' + response.message);
    } catch (err) {
      alert(err);
    }
  }

  componentDidMount() {
    this.callExpress();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
