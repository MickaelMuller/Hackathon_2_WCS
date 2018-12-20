import React, { Component } from 'react';
import './Happiness.scss';
import Navbar from './home/Navbar';
import ArticlesHappiness from './ArticlesHappiness';
import Footer from './Footer';



class Happiness extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ArticlesHappiness />
                <Footer />
            </div>
        );
    }
}

export default Happiness;