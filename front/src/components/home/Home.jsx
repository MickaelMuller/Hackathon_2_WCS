import React, { Component } from 'react';
import './Home.scss';
import Navbar from './Navbar';
import Video from './Video';
import MeteoWidget from './MeteoWidget';
import Articles from '../Articles';
import Footer from '../Footer';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader  toggle={this.toggle}>Vous ne souhaitez pas en arriver là ?</ModalHeader>
          <ModalBody className="text">
            Vous voulez changer les choses ? Nous aussi !
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Les solutions ici =></Button>
          </ModalFooter>
        </Modal>
        <Footer />
      </div>
    );
  }
}

export default Home;
