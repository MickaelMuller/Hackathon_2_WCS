import React, { Component } from 'react';
import './Happiness.scss';
import Navbar from './home/Navbar';
import ArticlesHappiness from './ArticlesHappiness';
import Footer from './Footer';
import VideoHapsiness from './VideoHappiness';
import MeteoGreen from './home/MeteoGreen';



class Happiness extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <VideoHapsiness />
                <MeteoGreen />
                <ArticlesHappiness />
                <Footer />
            </div>
        );
    }
}

export default Happiness;