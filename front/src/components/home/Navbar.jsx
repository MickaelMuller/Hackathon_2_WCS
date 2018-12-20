import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
        <div className="nyt-navbar" onClick={this.toggle} />
        <Row className='red'>
          <h3>FLASH INFO</h3>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Vous ne souhaitez pas en arriver là ?</ModalHeader>
          <ModalBody className="text">
            Vous voulez changer les choses ? Nous aussi !
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Les solutions ici =></Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default Navbar;
