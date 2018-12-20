import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Sensibilisation from './components/Sensibilisation';
import FormTips from './components/FormTips'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sensibilisation" component={Sensibilisation} />
        </Switch>
      </div>
    );
  }
}

export default App;
