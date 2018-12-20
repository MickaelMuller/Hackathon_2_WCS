import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navbar.scss';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container fluid className='Navbar'>
        <div fluid className="nyt-navbar" onClick={this.toggle} />
        <Row className='red'>
          <h3>FLASH INFO</h3>
        </Row>
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
            <Button color="success" onClick={this.toggle} style={{color: 'white'}}>Nos solutions =></Button>
          </Link>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default Navbar;
