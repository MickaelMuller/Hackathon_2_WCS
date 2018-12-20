import React, { Component } from 'react';
import MeteoWidget from './components/MeteoWidget';
import Video from './components/Video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Video />
        <MeteoWidget />
      </div>
    );
  }
}

export default App;
