import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { appname: 'fantasy-league' };
    this.setAppName = this.setAppName.bind(this);
  }
  setAppName(appName) {
    this.setState({ appname: appName });
  }

  render() {
    return (
      <div className="App">
        <Home appname={this.state.appname} setAppname={this.setAppName}></Home>
      </div>
    );
  }
}

export default App;
