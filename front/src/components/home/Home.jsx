import React, { Component } from 'react';
import './Home.scss';
import Navbar from './Navbar';
import Video from './Video';
import MeteoWidget from './MeteoWidget';
import Articles from '../Articles';
import Footer from '../Footer';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
     }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div onClick={this.toggle}>
        <Navbar/>
        <Video />
        <MeteoWidget />
        <Articles />
        <Footer />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} charCode="☠">Vous ne souhaitez pas en arriver là ?</ModalHeader>
          <ModalBody className="text">
            Vous voulez changer les choses ? Nous aussi ! 
            <br/>
            <br/>
            <img width="200px" src="/medias/weneedyou.jpg" alt="weneedyou"/>
          </ModalBody>
          <ModalFooter>
          <Link to='./sensibilisation' >
            <Button className="end-modal" onClick={this.toggle} style={{color: 'white'}}>Nos solutions =></Button>
          </Link>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Home;
