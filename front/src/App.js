import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MeteoWidget from './components/MeteoWidget';
import Video from './components/Video';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Video />
        <MeteoWidget />
        <Footer />
      </div>
    );
  }
}

export default App;
