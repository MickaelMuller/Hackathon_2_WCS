import React, { Component } from 'react';
import MeteoWidget from './components/MeteoWidget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MeteoWidget />
      </div>
    );
  }
}

export default App;
