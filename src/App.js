import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home/Home';
import Landingscreen from './Screens/LandingScreen/landingscreen';
import Newbetting from './Screens/NewBetting/newbetting';
import Menu from './Components/Menu/menu';

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
        <Router>
          <Menu />
          <Switch>
            <Route path='/home'>
              <Home appname={this.state.appname} setAppname={this.setAppName}></Home>
            </Route>
            <Route path='/newbet'>
              <Newbetting />
            </Route>
            <Route path='/'>
              <Landingscreen />
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
