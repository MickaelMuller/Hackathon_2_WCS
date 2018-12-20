import React, { Component } from 'react';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Sensibilisation from './components/Sensibilisation.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sensibilisation />
      </div>
    );
  }
}

export default App;
