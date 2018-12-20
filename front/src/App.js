import React, { Component } from 'react';
import ModalExample from '../src/components/PopUp';
import Navbar from './components/Navbar';
import MeteoWidget from './components/MeteoWidget';
import Video from './components/Video';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalExample />
        <Navbar />
        <Video />
        <MeteoWidget />
      </div>
    );
  }
}

export default App;
