import React, { Component } from 'react';
import './Home.scss';
import Navbar from './Navbar';
import Video from './Video';
import MeteoWidget from './MeteoWidget';
import Articles from '../Articles';
import Footer from '../Footer';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }


  render() {
    return (
      <div>
        <Navbar/>
        <Video />
        <MeteoWidget />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default Home;
