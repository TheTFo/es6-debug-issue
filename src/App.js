import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function doSomething(a) {
  return "whatever";
}

function someFunc(a, i) {
  switch (i) {
    case 1: {
      let myObject = a;
      return doSomething(myObject);
    }
    case 2: {
      let myObject = a;
      return doSomething(myObject);
    }
    default: {

    }
  }
}

class App extends Component {
  render() {
    someFunc({ prop: 'something' }, 2);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
