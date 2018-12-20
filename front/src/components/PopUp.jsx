import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './PopUp.scss';

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="button">
        <Button color="danger" onClick={this.toggle}>Click</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader  toggle={this.toggle}>Vous ne souhaitez pas en arriver là ?</ModalHeader>
          <ModalBody className="text">
            Vous voulez changer les choses ? Nous aussi !
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Les solutions ici =></Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;

