import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@example/monorepo/packages/component-module';

function App() {
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
      <my-element>
        <p>This is child content</p>
      </my-element>
    </div>
  );
}

export default App;
