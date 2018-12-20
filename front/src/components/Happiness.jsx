import React, { Component } from 'react';
import './Happiness.scss';
import Navbar from './home/Navbar';
import ArticlesHappiness from './ArticlesHappiness';
import Footer from './Footer';
import VideoHapsiness from './VideoHappiness';



class Happiness extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <VideoHapsiness />
                <ArticlesHappiness />
                <Footer />
            </div>
        );
    }
}

export default Happiness;