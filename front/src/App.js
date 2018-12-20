import React, { Component } from 'react';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
       <Footer />
      </div>
    );
  }
}

export default App;
